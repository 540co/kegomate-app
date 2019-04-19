#!/bin/bash

CF_DIST_ID=$CF_DIST_ID_PROD

# Allow `awscli` to make requests to CloudFront.
aws configure set preview.cloudfront true

# Invalidate every object in the targeted distribution.
aws cloudfront create-invalidation --distribution-id $CF_DIST_ID --paths "/*"
