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