import React from 'react';
import { Route, Redirect  } from 'react-router-dom';


export default (props) => {
    // Extract auth and access from role.
    const {auth, access, ...other} = props;

    console.log(auth);
    // If we are not logged in, redirect to home page.
    if(!auth.role){
        return <Redirect to={'/'}/>
    }

    // If the auth role and access don't match, redirect to according home page.
    if(auth.role !== access){
        if(access === 'customer'){
            return <Redirect to={'/dashboard'}/>
        } else {
            return <Redirect to={'/admin'}/>
        }
    }

    // Otherwise, return a route to the destination.
    return <Route {...other}/>

};