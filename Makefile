cwd := $(shell pwd)

build:
	npm run strip:all && npm run buble:all

test:
	npm run test

cov:
	npm run prepublish

.PHONY: build test
