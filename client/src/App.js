import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Home from "./views/Home/Home";
import Register from './views/Register';
import LogIn from './views/LogIn'
import Background_pic from "./assets/aerial-photo-of-buildings-and-roads-681335.jpg";
import Weather from "./views/Weather";
import Dashboard from "./views/Dashboard";
import Quiz from "./views/Quiz/Quiz";
import '../src/views/main.css'
import Admin from "./views/Admin/Admin";
import AddAccident from "./views/Admin/AddAccident";
import Client_info from "./views/Admin/Client_Info";
import Info_accident from "./views/Admin/Info_accident";
import Statistic_city from "./views/Admin/Statistic_city";


const App = () => {

    const [auth, setAuth] = React.useState({});


  return (
    <div>
        {/* <NavBar />*/}
        <img src={Background_pic} class='backgroundStyles'/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/log-in" render={() => <LogIn setAuth={setAuth}/>} />
            <ProtectedRoute auth={auth} exact access={'customer'} path="/dashboard" component={Dashboard} />
            <ProtectedRoute auth={auth} exact access={'customer'} path="/weather" component={Weather} />
            <ProtectedRoute auth={auth} exact access={'customer'} path="/quiz" component={Quiz} />
            <ProtectedRoute auth={auth} exact access={'agent'} path="/admin" component={Admin} />
            <ProtectedRoute auth={auth} exact access={'agent'} path="/add_accident" component={AddAccident} />
            <ProtectedRoute auth={auth} exact access={'agent'} path="/client_info" component={Client_info} />
            <ProtectedRoute auth={auth} exact access={'agent'} path="/info_accident" component={Info_accident}/>
            <ProtectedRoute auth={auth} exact access={'customer'} path="/statistic_city" component={Statistic_city} />
            <Redirect to={'/'}/>
      </Switch>
    </div>
  );
};

export default App;
