#!/usr/bin/env bash
# set -eu
# set -o pipefail

repo_dir_name=$(dirname "$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)")

echo "$PWD"
echo ${repo_dir_name} 

# pushd .
# cd ${repo_dir_name}/server
# npm install
# npm test
# popd
