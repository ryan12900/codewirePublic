import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound";
import NavBar from "./components/Header/NavBar";
import background from "./assets/aerial-photo-of-buildings-and-roads-681335.jpg";

const backgroundStyles = {
    minHeight: '100%',
    minWidth: '1024px',
    width: '100%',
    height: 'auto',
    position: 'fixed',
    top: '0',
    left: '0'
};

const App = () => {
  return (
    <div>
        {/* <NavBar />*/}
        <img src={background} className="background-logo" style={backgroundStyles}/>
        <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
