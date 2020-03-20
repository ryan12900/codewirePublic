import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import Register from './views/Register';
import LogIn from './views/LogIn'
import Background_pic from "./assets/aerial-photo-of-buildings-and-roads-681335.jpg";
import Dashboard from "./views/Dashboard";
import '../src/views/main.css'

const App = () => {
  return (
    <div>
        {/* <NavBar />*/}
        <img src={Background_pic} class='backgroundStyles'/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/log-in" component={LogIn} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Redirect to={'/'}/>
      </Switch>
    </div>
  );
}

export default App;
