import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import {Menu, Container, Dropdown,} from "semantic-ui-react";


const Index = ({auth})=> {
    let menuOptions;


    if(!auth.role){
        return <div/>
    }

    if(auth.role === 'customer'){
        menuOptions =
            (<Dropdown.Menu>
                <Link to={'/weather'} ><Dropdown.Item style={{color: 'black'}}>Weather</Dropdown.Item></Link>
                <Link to={'/quiz'} ><Dropdown.Item style={{color: 'black'}}>Safety Quiz</Dropdown.Item></Link>
                <Link to={'/statistic_city'}><Dropdown.Item style={{color: 'black'}}>Weather</Dropdown.Item></Link>
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
                </Container>
            </Menu>
        </div>
    );
};
export default Index;
