# School assignment in the [backend 2 course](https://nackademin.se/utbildningar/programutvecklare-java/)

## This is the frontend of the project

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `docker build -t {dockerHubUsername}/{imagename}:tagname .`

Builds an local docker image.\

### `docker push {dockerHubUsername}/{imagename}:tagname`

Pushes the local docker image to an repository on dockerhub.

## Docker compose exampel file

```js
version: '3'

frontend:
   container_name: frontend
   image: docker image
   volumes:
     - './:/app'
     - '/app/node_modules'
   ports:
     - 3000:3000
   stdin_open: true
   environment:
     - CHOKIDAR_USEPOLLING=true
   command: npm run start
```
