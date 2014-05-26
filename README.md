# Tada (frontend JS repo)

**NOTE**: For this repository to work, you need to be running a Tada API
          server in the background on localhost:8000. See:
          https://github.com/yaymukund/tada-api

## Installation

```bash
$ git clone https://github.com/yaymukund/tada.git
$ cd tada
$ make install

# When you do this, make sure the API server is running on port 8000.
$ make app
$ open http://localhost:4200
```

## Commands

* `make install` - Install dependencies via `npm` and `bower`.
* `make app` - Start a server on http://localhost:4200
* `make build` - Build to `dist/`
