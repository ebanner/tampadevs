FROM node:alpine3.17

WORKDIR /app

COPY package*.json /app

RUN npm add -g npm @11ty/eleventy
RUN npm install

ENTRYPOINT ["npm", "run", "dev"]
