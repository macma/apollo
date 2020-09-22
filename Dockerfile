FROM node:12-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY src /usr/src/app/src
COPY test /usr/src/app/test

EXPOSE 4000
CMD [ "node", "app.js" ]
