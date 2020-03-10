import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';
import background from '../../assets/aerial-photo-of-buildings-and-roads-681335.jpg'
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <header className="Landing-header">
                    CityRanker
                </header>
                <div className="Landing-rectangle">
                    CityRanker is a platform for users to compare city insurance rates around the United States.
                    With an account, users are able to compare a variety of cities based on insurance rates,
                    accident prevalence, and weather data.
                </div>
                <div className="Redirect-rectangle">
                    <a
                        className="Login-user"
                        href="./Login"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Login As User
                    </a>
                    <a
                        className="Login-insurance"
                        href="./SignupInsurance"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Login As Insurance Provider
                    </a>

                    <a
                        className="Sign-Up"
                        href="./Signup"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Sign Up
                    </a>
                    <p className="vl"></p>
                    <p className="Question-left">
                        Click Here to Login:
                    </p>
                    <p className="Question-right">
                        Don't Have an Account?
                        Click Here:
                    </p>
                </div>
            </header>
        </div>
    );
}

export default Home;
