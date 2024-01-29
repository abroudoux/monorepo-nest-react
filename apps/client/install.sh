#!/bin/bash

npm install

cp .env.example .env

rm -rf .git

npm run build

