#!/bin/sh
set -e # Exit immediately if any command fails

/app/deploy/wait-for-it.sh db:5432 -t 15 -- echo "Database ready!"

yarn prisma migrate deploy # Apply migrations

yarn prisma generate # Generate prisma schema

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
