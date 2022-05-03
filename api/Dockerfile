FROM node:17.6-alpine3.14



COPY package.json ./
COPY package-lock.json ./


RUN npm install -g nodemon && npm install

COPY . /

EXPOSE 3001
EXPOSE 9229

CMD ["node", "app.js"]