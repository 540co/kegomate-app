#!/bin/bash

aws s3 sync s3://540-kegomate-artifacts/$UPLOAD_DIR s3://540-kegomate-artifacts/$TRAVIS_BRANCH --delete
aws s3 rm s3://540-kegomate-artifacts/$UPLOAD_DIR --recursive
