# Controllers 
Below is a list of all middleware functions used in the project:
* **validateLogin** - Checks that the login request is valid (_ex_. there are no empty fields, etc..).
* **validateRegistration** - Checks that the sign up request is valid (_ex_. there are no empty fields, etc..).
* **registerUser** - Registers the user.
* **loginUser** - Logs in user and returns JWT Bearer token.
* **weatherController** - Returns weather information in JSON format of specified city.
* **accidentController** - Returns accident data in JSON format for state, county, and year.
* **updateQuiz** - Updates customer quiz scores
* **read_all/read_client** - Reads current user 