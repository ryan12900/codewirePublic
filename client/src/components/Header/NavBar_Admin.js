import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import {Button, Card,Menu, Container, Divider, Dropdown,} from "semantic-ui-react";


const NavBar_Admin = () => {
    return (
        <div>
            <Menu fixed='top' inverted >
                <Container>
                    <Link to={"/admin"}>
                    <Menu.Item as='a'>Home</Menu.Item>
                    </Link>
                    <Dropdown item simple text='Options'>
                        <Dropdown.Menu>
                            <Dropdown.Item>View Statitics</Dropdown.Item>
                            <Dropdown.Item>View Client Info</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Menu>
        </div>
    );
};
export default NavBar_Admin;
