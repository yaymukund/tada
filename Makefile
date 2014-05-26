.PHONY: app build deploy install

install:
	npm install
	bower install

app:
	./node_modules/ember-cli/bin/ember server --proxy http://localhost:8000

build:
	./node_modules/ember-cli/bin/ember build --environment production

deploy:
	./node_modules/ember-cli/bin/ember build --environment production --output-path ../tada-api/static/
