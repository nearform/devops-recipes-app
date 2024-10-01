#!/usr/bin/env bash
# set -eu
# set -o pipefail

echo repo_dir_name=$(dirname "$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)")
ls
ls -l
echo "$PWD"
echo ${repo_dir_name} 

# pushd .
# cd ${repo_dir_name}/server
# npm install
# npm test
# popd
