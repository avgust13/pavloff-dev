#!/bin/bash
cd /var/pavloff-dev
git pull origin main
sudo systemctl restart nginx