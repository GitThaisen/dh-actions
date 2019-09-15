const core = require('@actions/core')
const exec = require('child_process').exec
const args = core.getInput('args')
const docker = exec(`/usr/bin/docker ${args}`)
docker.stdout.pipe(process.stdout)
docker.stderr.pipe(process.stderr)
