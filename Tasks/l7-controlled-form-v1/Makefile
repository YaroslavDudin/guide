setup: install
	npx simple-git-hooks

install:
	npm ci

dev:
	npm run dev

start-server:
	node server.js

run:
	make start-server & make dev

test:
	npm test

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

test-steps:
	node --test --test-name-pattern step1
	node --test --test-name-pattern step2
	node --test --test-name-pattern step3
	node --test --test-name-pattern step4
	node --test --test-name-pattern step5

test-step:
	node --test --test-name-pattern step$(STEP)