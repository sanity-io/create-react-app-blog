This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting the App Up and Running

- `git clone` and `cd` into the project

### React App 
- `npm install` to install all dependencies
- `npm start`
- Navigate to `localhost:3000` to view app

### Sanity Studio

To get our Sanity Studio up and running, we need to have a projectId in `src/client.js`. If you already have a `projectId` then be sure to add that value there. Otherwise you will need to `sanity init`. All instructions are below.

If you already have a `projectId`:
- Run the command `cd mysanityblog`
- Run `sanity install` to install Sanity dependencies
- Add `projectId` to `src/client.js`
- Run `sanity start`
- Navigate to `localhost:3333` to view Sanity Studio

If you _do not_ have a `projectId`:
- Run the command `cd mysanityblog`
- Run `sanity init`
- Answer the following questions:
    * Create new project — Hit Enter. 
    * Your project name: — We can name it whatever we would like. Let’s use My Sanity Blog for this project. 
    * Use the default dataset configuration? — The default dataset configuration has a public dataset named "production", let's stick with that. So type in "Y" and hit Enter. 
    * Project output path: — This will show us the path where our sanity project will live. The path should show the path that leads to this: /sanity-react/mysanityblog. Hit Enter. 
    * Select project template: — Here we are going to choose Blog (schema). Using the arrow keys, navigate to that so it’s showing blue. Hit Enter once there. Success!
- Add new `projectId` to `src/client.js` (detailed instructions below)
- Run `sanity start`
- Navigate to `localhost:3333` to view Sanity Studio

## Sanity Management

Connecting the React app and Sanity project can be done with the following steps:

- Navigate to [manage.sanity.io](https://manage.sanity.io/)
- Click on the name of your project (name was created during `sanity init`)
- Find the `projectId` at the top of the project's dashboard.
    * Navigate to `src/client.js` in the code and insert the projectId where it says "YOUR PROJECT ID HERE"
- Back in the project's dashboard, go to the "Settings" tab
    * Click on API
    * Under "CORS Origins" click on "ADD NEW ORIGIN"
    * Insert `http://localhost:3000`
    * Click on "ADD NEW ORIGIN"

**Happy Blogging!**
