FROM node:17.6-alpine3.14

WORKDIR /webui

ENV PATH /webui/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

CMD ["npm", "start"]