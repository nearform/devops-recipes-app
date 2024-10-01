#!/usr/bin/env bash
set -eu
set -o pipefail

repo_dir_name=$(dirname "$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)")

echo "pwd"
ls
ls -l

pushd .
cd ${repo_dir_name}/client
npm install
CI=true npm run test
popd
