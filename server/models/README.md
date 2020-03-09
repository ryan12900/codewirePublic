# Models
* **User.js** - Schema for our users. Each user has the following properties:
    * _firstName_ - User first name
    * _lastName_ - User last name.
    * _email_ - User email.
    * _password_ - User password stored as a hash.
    * _date_ - Date user was created.
    * _role_ - Defines their role and what resources they can access. Can either be `customer` or `agent`