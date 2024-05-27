#!/bin/sh

# Wait for the PostgreSQL container to be ready
until nc -z -v -w30 testPostgresSQLContainer 5432
do
  echo "Waiting for PostgreSQL database connection..."
  sleep 1
done

# Run database creation and migration
npx sequelize-cli db:migrate
npm install
# Start the application
npm run start
