#!/bin/sh

# Run database creation and migration
npx sequelize-cli db:migrate
npm install
# Start the application
npm run start
