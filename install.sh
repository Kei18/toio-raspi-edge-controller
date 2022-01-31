#!/bin/bash
sudo apt-get -y update
curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n
bash n lts
sudo npm install -g n
sudo n install stable
sudo n stable
sudo npm install --global yarn
yarn install
yarn build
