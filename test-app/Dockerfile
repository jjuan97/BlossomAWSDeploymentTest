FROM node:21
WORKDIR /app
COPY . .
EXPOSE 3000
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
