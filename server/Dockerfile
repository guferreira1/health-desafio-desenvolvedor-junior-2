FROM node:alpine

WORKDIR /src/server

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 5000

CMD ["yarn", "dev"]