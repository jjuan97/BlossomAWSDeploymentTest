FROM node:21
RUN apt-get update && apt-get install -y netcat-openbsd
WORKDIR /app
COPY . .
EXPOSE 4000
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]