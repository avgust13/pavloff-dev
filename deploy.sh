#!/bin/bash
cd /var/pavloff-dev
git pull origin main
yarn install
yarn build
pm2 restart pavloff-dev