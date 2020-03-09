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