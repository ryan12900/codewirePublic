# Codewire
# README
This README is a project overview, everything in this README has its own internal README file

* **Client** - front end, client-facing display logic
* **server** - back end, data-focused logic
* _Development README_ - initial development README, contains useful initialization and build script information

# Config
Included:
* **express.js** - Express app configuration
* **passport.js** - Passport-JWT configuration and user authentication

Excluded:
* **config.js** - Can be used to establish local variables (such as database URI) for local hosting. GIT ignored for security

# Server
Contains the following backend data (consult internal README files for greater details):
* **config** - Relevant configuration properties, express and passport setup
* **controllers** - Middleware controllers to handle backend requests.
* **models** - Database schema for Users and agent created accidents.
* **routes** - Routes to query middleware functions.
* **server.js** - Initializes server and express app.

# Controllers 
Below is a list of all middleware functions used in the project:
* **validateLogin** - Checks that the login request is valid (_ex_. there are no empty fields, etc..).
* **validateRegistration** - Checks that the sign up request is valid (_ex_. there are no empty fields, etc..).
* **registerUser** - Registers the user.
* **loginUser** - Logs in user and returns JWT Bearer token.
* **weatherController** - Returns weather information in JSON format of specified city. The JSON information is fetched from the OpenWeatherMap API at http://api.openweathermap.org/data/2.5/weather?q=key
* **accidentController** - Returns accident data in JSON format for state, county, and year. The JSON information is fetched from the NHTSA Crash View API at https://crashviewer.nhtsa.dot.gov/CrashAPI/crashes/GetCaseList?states='+IDs+'&fromYear=2010&toYear=2020&minNumOfVehicles=1&maxNumOfVehicles=100&format=json
* **updateQuiz** - Updates customer quiz scores
* **read_all/read_client** - Reads current user 

# Models
* **User.js** - Schema for our users. Each user has the following properties:
    * _firstName_ - User first name, required.
    * _lastName_ - User last name, required.
    * _email_ - User email, required, unique.
    * _password_ - User password stored as a hash, required.
    * _date_ - Date user was created.
    * _role_ - Defines their role and what resources they can access. Can either be `customer` or `agent`.
    * _quizScore_ - User quiz score. Unique to customer role.
    * _dashcam_ - Does the customer have a dashcam.
    * _phone_ - Customer phone number.
    * _addy_ - Customer home address.
    * _city_ - Customer's resident city.
    * _state_ - Customer's resident state.
    * _agentId_ - Unique agent Id used to link agents and customer, required.
    
* **Accident.js** - Schema for agent-uploaded accident reports. Each accident has the following properties:
    * _date_ - Date accident occurred.
    * _time_ - Time the accident occurred.
    * _nameOfVictim_ - Name of any victims involved in accident.
    * _nameOfFaultDriver_  - Name of at fault driver.
    * _address_ - Address of accident.
    * _city_ - City in which the accident occurred.
    * _state_ - State in which the accident occurred.
    * _numPeopleInvolved_ - Number of individuals involved in the accident.

    # Routes

## Users
* _users/register_ - Route to register a user. Expects the following parameters:
     ````
    {
        firstName: String,
        lastName: String,
        email: String,
        password: String,
        password2: String (must equal pw.... this is the confirm password box).
        role: String (must be either 'agent' or 'customer')
      
    }

* _users/login_ - Route to login a user. Expects the following parameters:
     ````
    {
        email: String,
        password: String,
    }
  ````

## Weather
* _weather/cityName_ - Route to a specific city's weather information: Returns the following parameters:
    ````
    {
        cityName: String,
        weatherMain: String,
        weatherDescription: String,
        visibility: number,
        windSpeed: number,
    }
    ````
  
## Accidents
* _accident/states=:stateName_ - Route to a state's (or states', use commas as delimiter, not case sensitive) accident list (data from 2010-present, max 5000). Returns the following parameters:
    ````
    {
        "CountyName": String (includes county number in parentheses),
        "CrashDate": JSON Date String,
        "Fatals": Number,
        "Peds": Number,
        "Persons": Number,
        "St_Case": Number,
        "State": Number,
        "StateName": String,
        "TotalVehicles": Number
    }
    ````
* _accident/states=:stateName/years=:year_ - Route to list of state (or states, comma as delimiter, not case sensitive) accidents by year (can input start and end date separated by commas). Returns the following parameters:
    ````
    {
        "CountyName": String (includes county number in parentheses),
        "CrashDate": JSON Date String,
        "Fatals": Number,
        "Peds": Number,
        "Persons": Number,
        "St_Case": Number,
        "State": Number,
        "StateName": String,
        "TotalVehicles": Number
    }
    ````
* _accident/state=:stateName/county=:county/years=:year_ - Route to accident list for specific county (numerical code) in specific state (not case sensitive) by year (can input start and end date separated by commas). Returns the following parameters:
    ````
    {
        "CITY": Number,
        "CITYNAME": String (or "Not Applicable"),
        "COUNTY": Number,
        "COUNTYNAME": String (includes county number in parentheses),
        "CaseYear": Number,
        "FATALS": Number,
        "LATITUDE": Number,
        "LONGITUD": Number,
        "STATE": Number,
        "STATENAME": String,
        "ST_CASE": Number,
        "TOTALVEHICLES": Number,
        "TWAY_ID": String,
        "TWAY_ID2": String,
        "VE_FORMS": Number
    }
    ````
* _accident/analytics/state=:stateName/years=:year_ - Route to summary data of crash counts in a specific state (not case sensitive) for each year provided (single or start and end year separated by a comma). Returns the following parameters:
    ````
    {
        "CaseYear": String,
        "CrashCounts": Number,
        "TotalFatalCounts": Number
    }
    ````
* _accident/state=:stateName/city=:cityName/year=:year_ - Route to accident list of a city in a given year. Returns the same parameters as /state/county/year.
* _/state=:stateName/county=:countyName/city=:cityName/year=:year_ - Route to accident list of a city in a given year, county included to improve query speed. Returns the same parameters as /state/county/year.

## Admin
* _admin/accident_ - Route to create and upload and accident. See models/Accident for more details.
* _admin/accidents_ - Route to pull all created accidents stored in the database. See models/Accident for more details on returned schema.
* _admin/accident/:id_ - Route to delete the specified accident based on id.

## Customer
* _customer/:userId/quiz_ - Route to update quiz score of user specified by Id.
* _customer/:agentId_ - Route to read client based on agent Id provided.

# Client
All pertinent front end files found in /src
* **assets** - provides image asset for background
* **components** - contains front end components and logic
* **views** - contains page displays
* **App.js** - routing for client navigation
* **index.js** - React DOM rendering for App.js
* **serviceWorker.js** - this lets the app load faster on subsequent visits in production, and gives it offline capabilities

# Components
Below is the list of front end components:
* **Footer** - contains icon and logic for displaying the Codewire footer
* **Navbar** - contains logic and styling for top navigation bar on both customer and agent views
* **ProtectedRoute** - contains logic for protecting internal routes, forcing login to view pages
* **Quiz component** - contains driver safety quiz display logic (MainQuiz.js), question bank (QuizData.js), and backend API calls to update user schema

# Views
Contains front end pages for display
* **Admin** - contains Admin/Agent dashboard (Admin.js), add accident page (AddAccident.js), client list (Client_Info.js), agent-uploaded accident visualization (Info_Accident.js), display for API-based accident data (Statistic_city.js)
* **Dashboard** - customer dashboard display
* **Home** - site homepage
* **Login** - login page and backend validation requests
* **Quiz** - customer driver safety quiz display page and styling
* **Register** - registration page display and backend validation and user schema update requests
* **Weather** - customer weather display and visualization page

Additional Files
* **main.css and style.js** - provides styling for UI elements
* **NotFound.js** - returns page not found

# Admin
Contains the following files for displaying admin/agent pages
* **Admin.js** - Admin/Agent dashboard and navigation
* **AddAccident.js** - Add accident page and display
* **Client_Info.js** - Client list (including all relevant information). Agent specific based on agent ID
* **Statistic_city.js** - Display for API-based accident data. Contains requests to backend for NHTSA FARS data
* **Info_Accident.js** - Agent-uploaded accident visualization, both list format (with all relevant information) and graphic display

## _**PLEASE READ THIS TO COMPLETION BEFORE ASKING ANY QUESTIONS!**_

### _**IMPORTANT NOTES**_ - 
This project does not have a mongoDB connection setup. Setup the connection based on the environments below.
- local development: create a config file (make sure to name it config.js) in the config folder, which exports your db.uri connection. An example is provided, config/config.example.js. This file will be ignored by git so your db credentials will be kept safe when the app is deployed.
- production: Since the config file is not pushed when you deploy your app, you must specifiy your db uri in heorku. Set the uri in heroku as specified in [this](https://devcenter.heroku.com/articles/config-vars) resource. Make sure you name the environement variable "DB_URI".

This project contains an example project board meant to showcase how one can be used. The issues posted to it are not real issues.

## Getting Started
This repository aims to assist you in beginning work on a MERN stack application for heroku deployment with a solid file structure as a foundation. To get started make a copy of this template repo for your project teams by clicking the green "Use this template" button above.

Since this project will hold both the client application and the server application there will be node modules in two different places. First run `npm install` from the root. After this you will run `npm run-script install-all` from the root. From now on run this command anytime you want to install all modules again. This is a script we have defined in package.json. Alternatively your group may choose to simplify this process by using yarn workspaces as specified [here](https://yarnpkg.com/lang/en/docs/workspaces/).

This app can be deployed directly to heroku since there is a script defined in package.json which will automatically handle building and deploying the app. For more information on deploying to heroku reference the extra resources at the bottom of this file. 


## Available Scripts

Please note that any time the server is run in these scripts `nodemon` is used in place of `node` for easier development. If you are interested in how this works follow the nodemon In the project directory, you can run:

### `npm run-script dev`

Runs both the client app and the server app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm run-script client`

Runs just the client app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.


### `npm run-script server`

Runs just the server in development mode.<br>


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

If deploying to heroku this does not need to be run since it is handled by the heroku-postbuild script<br>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## File structure
#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `assets` - This folder holds assets such as images, docs, and fonts
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `views` - These represent a unique page on the website i.e. Home or About. These are still normal react components
    - #### `App.js` - This is what renders all of our browser routes and different views
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client
#### `server` - Holds the server application
- #### `config` - This holds our configuration files, like mongoDB uri
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `tests` - This holds all of our server tests that we have defined
- #### `server.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!

## Learn More
To learn how to setup a local MongoDB instance for testing, check out how to [connect to MongoDB](https://docs.mongodb.com/guides/server/drivers/).

To learn how to deploy a full-stack web app to heroku, check out [this great guide](https://daveceddia.com/deploy-react-express-app-heroku/).

To learn React, check out the [React documentation](https://reactjs.org/).
