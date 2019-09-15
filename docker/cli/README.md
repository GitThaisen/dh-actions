# docker/cli

## Usage
```bash
jobs:
  docker-build:
    name: Build image
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
        with:
          fetch-depth: 1
      - uses: nrkno/dh-actions/docker@master
        env:
          DOCKER_BUILDKIT: 1
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
        with:
          args: "build --build-arg NPM_TOKEN=$NPM_TOKEN -t imageName:foo ."
```
