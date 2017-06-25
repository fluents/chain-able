cwd := $(shell pwd)

# copy -recursively -forced
copy:
	cp -R -f eh dists/

# remove dist, -force -recursively even if it exists and is a folder
clean:
	rm -f -r dists/ && rm -f -r dist/ && rm -f -r test-dist/

old:
	npm run strip:all && npm run buble:all

test:
	npm run test

cov:
	npm run prepublish

quick:
	node build/cli.js --quick --test

build:
	node build/cli.js --production



.PHONY: clean, quick
