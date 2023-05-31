# Getting Started with React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## This is a React app created to learn various aspects of react
###
- Basics of bootstrapping an app
- Using hooks 
    - useState
    - useEffect
    - useNavigate
    - useLocation
- Creating a custom Fetch hook
- Fetching data form a remote source
- UI Aspects:
    - displaying a list using map
    - embedded components
    - passing props to components
    - using links and passing state object via the link
    - conditional displays
    - input box
- Dockerized the app, create an image and run it on a local container

## Features
- By default, shows a list of popular recipes
- Click the recipe to see details
    - On the details page, there is a section for Similar Recipes that come from an external service that does a similarity search
- A search feature that updates results as you type. This uses a Trie Data structure that is a cache on the app and does a really fast lookup

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

