import React from 'react';
import {Button, Card,Menu, Container, Divider, Dropdown,List,Header,Grid,Segment,Image} from "semantic-ui-react";
import logo from '../Footer/car-icon-3657902_960_720.png'

const Footer = () => {
    return (
        <div>
        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
            <Container textAlign='center'>
                <Image centered size='medium' src={logo} />
                <p>Made by CodeWire</p>
            </Container>
        </Segment>
        </div>
    );
};
export default Footer;