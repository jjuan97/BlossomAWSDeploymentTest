#!/bin/sh
set -e

echo "Starting the application..."
# Run database creation and migration
#npx sequelize-cli db:migrate
# Start the application
npm run start
