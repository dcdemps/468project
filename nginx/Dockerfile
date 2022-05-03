FROM nginx


EXPOSE 80


RUN mkdir /etc/nginx/sites-available/ 
RUN mkdir /etc/nginx/sites-enabled/

COPY rambank /etc/nginx/sites-available/

RUN ln -s /etc/nginx/sites-available/rambank /etc/nginx/sites-enabled/rambank
