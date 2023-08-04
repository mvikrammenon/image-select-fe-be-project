# Express/React Coding excercise

- A simple react app that shows:
    - Thumbnails of images
    - A detail section that shows corresponding larger image
- Uses Express.js to serve the UI
- Exposes an endpoint at `/api/v1/templates` that provides a JSON containing image name, thumbnail name and few other details.
- Does not have Unit tests

This project's UI was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Demo

![](https://github.com/mvikrammenon/image-select-fe-be-project/blob/84d7533534a5baca7e6e80e3bf494e603c539e06/demo/demo.gif)

## Pre requisites
- Node.js
- run `npm install` in both <root>/client & <root>/server

## Run project in production mode

```
cd client
npm run build

// go back to root folder

cd server
npm run start
```
Open [http://localhost:5001] to view in browser


## Run project in dev mode

```
cd client
npm run dev

// go back to root folder

cd server
npm run dev
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
