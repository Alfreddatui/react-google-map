# Project Overview: Stage 1

This is a project by [udacity](https://www.udacity.com/) for the 5th lesson. The goal is to create the website responsive that are using Google Map API and to make it available when the connection is offline(by using [Service Worker] with React(https://developers.google.com/web/fundamentals/primers/service-workers/))

## Specification

This app are using npm module [create-react-app](https://github.com/facebook/create-react-app) to make the development process faster with [react-google-maps](https://github.com/tomchentw/react-google-maps) as the Google Map API wrapper and [ant-design](https://ant.design/) for the User Interface part.

## How to install

1. Clone this repo `git clone https://github.com/Alfreddatui/react-google-map.git`
2. Go to the directory `cd react-google-map`
3. Install all the dependencies `npm install`
4. Go into the build directory `cd build`
5. And start the server by using Python command

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

6. With your server running, visit the site: `http://localhost:8000`.


## Notes

The service worker config is tight to the creation of the app by `create-react-app`, I customized the service worker directly at the build directory in order to customised the service worker.