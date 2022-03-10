
# Stuff needed to make the react docker container and make it run

## my local npm, node, and react versions

npm version = v8.3.1<br/>
node version = v16.14.0<br/>
react version = v17.0.2<br/>
react-dom = v17.0.2<br/>
react-scripts = v5.0.0<br/>


## command to create image

docker build -t IMAGE_NAME .


## command to run image

sudo docker run \  <br/>
	-itd \  <br/>
	--rm \  <br/>
	-v ${PWD}:/webui \  <br/>
	-v /webui/node_modules \  <br/>
	-p 3001:3000 \  <br/>
	-e CHOKIDAR_USEPOLLING=true \  <br/>
	IMAGE_NAME

docker run -itd --rm -v ${PWD}:/webui -v /webui/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true IMAGE_NAME