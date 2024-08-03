#!/bin/bash
cd /var/pavloff-dev
git pull origin main
pm2 restart pavloff-dev
# sudo systemctl restart nginx