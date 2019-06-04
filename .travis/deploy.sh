#!/bin/bash

eval "$(ssh-agent -s)" # Start ssh-agent cache
chmod 600 .travis/id_rsa.enc # Allow read access to the private key
ssh-add .travis/id_rsa.enc # Add the private key to SSH

git config --global push.default matching
git remote add deploy ssh://travis@$IP:$PORT$DEPLOY_DIR
git push deploy master

# Skip this command if you don't need to execute any additional commands after deploying.
ssh travis@$IP -p $PORT <<EOF
  cd $DEPLOY_DIR
  git pull
  npm i
EOF
