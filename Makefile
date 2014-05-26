.PHONY: app

app:
	./node_modules/ember-cli/bin/ember server --proxy http://localhost:8000
