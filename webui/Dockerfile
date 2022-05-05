FROM node as build-stage

WORKDIR /webui

COPY package*.json ./

RUN npm install

COPY src ./src
COPY public ./public
COPY react.conf ./

RUN npm run build




FROM nginx:1.15

RUN rm /etc/nginx/conf.d/default.conf

COPY --from=build-stage /webui/react.conf /etc/nginx/conf.d/
COPY --from=build-stage /webui/build /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]