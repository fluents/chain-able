cwd := $(shell pwd)

clean:
	@echo 'todo'

old:
	npm run strip:all && npm run buble:all

test:
	npm run test

cov:
	npm run prepublish

quick:
	node _cli.js --quick --test

build:
	node _cli.js --production

.PHONY: quick
