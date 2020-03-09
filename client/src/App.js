import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Signup from "./components/Signup";
import SignupInsurance from "./components/SignupInsurance";
import Login from "./components/Login";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound";
import NavBar from "./components/Header/NavBar";

const App = () => {
  return (
    <div>
        {/* <NavBar />*/}
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/SignupInsurance" component={SignupInsurance} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
