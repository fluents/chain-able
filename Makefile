# 📜📒 Makefile
# learn more here: https://gist.github.com/isaacs/62a2d1825d04437c6f08
# TODO: https://github.com/eslint/doctrine/blob/master/Makefile.js
cwd := $(shell pwd)

# --- unused ---
# optimize-js dists/umd/index.js > dists/umd/index.js
# testdistjest:
# 	yarn run jest -- test/built.js --testPathIgnorePatterns=\"\" --testRegex=\"test/built.js\"
# covava:
# 	yarn run nyc -- ava
# covreport:
#		yarn run nyc -- report
# covtest:
#		nyc --reporter=html --reporter=text ava
# pretest:
# 	$(MAKE) stripbuble
# dist2:
# 	$(shell make copysrc && make buble)

# --- ops (copy, clean lint, docs) ---

# copy -recursively -forced

copy:
	cp -R -f src dists/

copyroot:
	yarn run strip -- src/ --pretty --all --out-dir ./ --quiet

copysrc:
	yarn run strip -- src/ --pretty --all --out-dir ./dist --quiet

# remove dist, -force -recursively even if it exists and is a folder
clean:
	rm -f -r dists/ && rm -f -r dist/ && rm -f -r test-dist/ && node build/cli --clean

lint:
	yarn run lint -- src/**.js src/**/*.js

docgen:
	node build/cli --docs

site:
	node docs/_site/index.js

dox:
	yarn run dox -- 'src/**/*.js' --layout markdown --output docs/bits/doxdox.md

tracknode:
	node --max-old-space-size=10000000 --trace-hydrogen --trace-phase=Z --trace-opt --trace-opt-verbose --trace-deopt --code-comments --hydrogen-track-positions --redirect-code-traces --redirect-code-traces-to=./code.asm

# --- build ---

buble:
	yarn run buble -- --input dist --output dist --sourcemap inline --no forOf,dangerousForOf,computedProperty,spreadRest

babel:
	yarn run babel -- src/ --out-dir dist

tests:
	yarn run test -- --notify

frisbee:
	cd _modules/frisbee && npm run test

testdist:
	yarn run ava -- test/built.js --verbose

# --- fuseweb ---

fuse:
	node build/fuse.js

webpack:
	yarn run webpack -- --config build/webpack.config.js --verbose

# --- cli/ci ---

cli:
	node build/cli.js

rollupcli:
	yarn run rollup -- --config build/cli-rollup.js --environment format:dev

cov:
	yarn run jest -- --coverage
jestsnap:
	yarn run jest -- --updateSnapshot
jestserialcov:
	yarn run jest -- --coverage --runInBand
jestserial:
	yarn run jest -- --runInBand
jestperf:
	yarn run jest -- --logHeapUsage
jestdiff:
	yarn run jest -- --lastCommit --onlyChanged

coveralls:
	yarn run coveralls -- < coverage/lcov.info

quick:
	node build/cli.js --quick --test

gzip:
	yarn run gzip -- dists/umd/index.js --raw \
	&& yarn run gzip -- dists/umd/index.js --raw >> build/size-over-time.txt \
	&& date +%Y:%M:%D:%H:%M:%S >> build/size-over-time.txt \
	&& echo --- >> build/size-over-time.txt

rollup:
	yarn run rollup -- -c build/rollup.config.js

easyexports:
	node build/easy-npm-files
lintexports:
	node build/cli --easyexports
cleanexports:
	node build/cli --cleaneasyexports
versions:
	node build/versions

# --- makefile combos/presets ---
# (the above things use names so they are non conflicting, e.g. we cannot have `build`)

precommit:
	$(MAKE) jestdiff

stripcombo:
	$(MAKE) copysrc && $(MAKE) copyroot

distcombo:
	$(MAKE) copysrc && $(MAKE) buble

buildcombo:
	$(MAKE) distcombo && $(MAKE) cli && $(MAKE) gzip

buildcombofuse:
	$(MAKE) distcombo && $(MAKE) cli && $(MAKE) fuse && $(MAKE) webpack && $(MAKE) gzip

export:
	$(MAKE) cleanexports && $(MAKE) easyexports && $(MAKE) lintexports

#&& $(MAKE) versions

travis:
	$(MAKE) stripcombo \
	&& $(MAKE) buildcombo \
	&& $(MAKE) testdist \
	&& $(MAKE) jestserial \
	&& $(MAKE) docgen \
	&& $(MAKE) export \
	&& $(MAKE) postpublish

prepublish:
	$(MAKE) copyroot \
	&& $(MAKE) docgen \
	&& $(MAKE) export \
	&& $(MAKE) buildcombo \
	&& $(MAKE) cov \
	&& $(MAKE) testdist

postpublish:
	$(MAKE) clean && $(MAKE) cleanexports

.PHONY: clean, quick
