import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import {Menu, Container, Dropdown,} from "semantic-ui-react";


const Index = ({auth, setAuth})=> {
    let menuOptions;


    if(auth === undefined || !auth.role){
        return <div/>
    }

    if(auth.role === 'customer'){
        menuOptions =
            (<Dropdown.Menu>
                <Link to={'/weather'} ><Dropdown.Item style={{color: 'black'}}>Weather</Dropdown.Item></Link>
                <Link to={'/quiz'} ><Dropdown.Item style={{color: 'black'}}>Safety Quiz</Dropdown.Item></Link>
                <Link to={'/statistic_city'}><Dropdown.Item style={{color: 'black'}}>Accidents</Dropdown.Item></Link>
            </Dropdown.Menu>);
    }

    if(auth.role === 'agent'){
        menuOptions =
            (<Dropdown.Menu>
                <Link to={'/add_accident'} ><Dropdown.Item style={{color: 'black'}}>Add Accident</Dropdown.Item></Link>
                <Link to={'/info_accident'} ><Dropdown.Item style={{color: 'black'}}>Accident Information</Dropdown.Item></Link>
                <Link to={'/client_info'} ><Dropdown.Item style={{color: 'black'}}>Client information</Dropdown.Item></Link>
                <Link to={'/statistics_city'} ><Dropdown.Item style={{color: 'black'}}>City statistics</Dropdown.Item></Link>

            </Dropdown.Menu>);
    }

    return (
        <div>
            <Menu fixed='top' inverted >
                <Container>
                    <Link to={"/admin"}>
                    <Menu.Item as='a'>Home</Menu.Item>
                    </Link>
                    <Dropdown item simple text='Options'>
                        {menuOptions}
                    </Dropdown>
                    <Menu.Item onClick={() => setAuth({})}>
                        Log Out
                    </Menu.Item>
                </Container>
            </Menu>
        </div>
    );
};
export default Index;
