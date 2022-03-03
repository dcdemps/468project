FROM node:17.6-alpine3.14

WORKDIR /webui

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm install react-scripts@5.0.0 -g

COPY . ./

CMD ["npm", "start"]