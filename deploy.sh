#!/bin/bash
cd /var/pavloffdev
git pull origin main
sudo systemctl restart nginx