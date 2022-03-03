
# Stuff needed to make the react docker container and make it run

## my local npm, node, and react versions

npm version = v8.3.1
node version = v16.14.0
react version = v17.0.2
react-dom = v17.0.2
react-scripts = v5.0.0


## command to create image

docker build -t IMAGE_NAME .


## command to run image

sudo docker run -itd --rm -v ${PWD}:/webui -v /webui/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true IMAGE_NAME

