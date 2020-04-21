import React from 'react';
import {Link} from "react-router-dom";
import { Button, Card,Input,Header,Segment,Container,Grid, Form,Message,Icon} from 'semantic-ui-react'
import '../main.css'
import styles from "../styles"
import axios from 'axios';
import {Bar} from 'react-chartjs-2';
import serverURL from '../../assets/server-url'

function Statistic_city() {

    const [accident1,setAccident1] = React.useState('');
    const [accident2,setAccident2] = React.useState('');
    const [accident3,setAccident3] = React.useState('');
    const [accident4,setAccident4] = React.useState('');
    const [accident5,setAccident5] = React.useState('');
    const [data, setData] = React.useState({
        length: undefined,
    });
    const [form, setForm] = React.useState({
        state: '',
        year: ''
    });
    const [data1,setdata1] = React.useState({
        city1:undefined,
        city1Name: " ",
    });
    const [data2,setdata2] = React.useState({
        city2:undefined,
        city2Name: " ",
    });
    const [data3,setdata3] = React.useState({
        city3:undefined,
        city3Name: " ",
    });
    const [data4,setdata4] = React.useState({
        city4:undefined,
        city4Name: " ",
    });
    const [data5,setdata5] = React.useState({
        city5:undefined,
        city5Name: " ",
    });
    const [barState,setBar] = React.useState({
        labels:["","","","",""],
        datasets: [
            {
                label: " ",
                backgroundColor: ['red','blue','green','pink','purple','yellow'],
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [undefined,undefined,undefined,undefined,undefined]               
            }
        ]
    });
    const [optionState,setOption] = React.useState({
        title:{
            display:false,
            text: '',
            fontSize: 20
        },
        legend:{
            display:false,
            position:'right'
        }
    });
    //const city,string2,county,state,city2,county2,state2,buff2,city3,county3,state3,buff3,city4,county4,state4,buff4,city5,county5,state5,buff5;

    const handlechange1= (e) => {
        const accident_ = e.target.value;
        setAccident1(accident_);
    };
    const handlechange2= (e) => {
        const accident_ = e.target.value;
        setAccident2(accident_);
    };
    const handlechange3= (e) => {
        const accident_ = e.target.value;
        setAccident3(accident_);
    };
    const handlechange4= (e) => {
        const accident_ = e.target.value;
        setAccident4(accident_);
    };
    const handlechange5= (e) => {
        const accident_ = e.target.value;
        setAccident5(accident_);
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({...form, [name]: value})
    };

    const handleSubmit = (e) => {
        const {state, year} = form;
        e.preventDefault();

        axios.get(`${serverURL}/accidents/states=${state}/years=${year}`)
            .then((response) =>{
                setData({...data,
                    length: response.data[0].length,
                });
                //alert(`The number of accidents in ${state} in ${year} was ${response.data[0].length}`);
        }).catch(() => {
            alert("There was an error retrieving the data.")
        })


    };

    const handleSubmit2 = (e) => {

        //const {state, year} = form;
        e.preventDefault();
        let string = accident1;
        let city = string.substring(0,string.indexOf(","));
        let string2 = string.substring(string.indexOf(",")+2);
        let county = string2.substring(0,string2.indexOf(","));
        let state = string2.substring(string2.indexOf(",")+2);

        let acc2 = accident2;
        let city2 = acc2.substring(0,acc2.indexOf(","));
        let buff2 = acc2.substring(acc2.indexOf(",")+2);
        let county2 = buff2.substring(0,buff2.indexOf(","));
        let state2 = buff2.substring(buff2.indexOf(",")+2);

        let acc3 = accident3;
        let city3 = acc3.substring(0,acc3.indexOf(","));
        let buff3 = acc3.substring(acc3.indexOf(",")+2);
        let county3 = buff3.substring(0,buff3.indexOf(","));
        let state3 = buff3.substring(buff3.indexOf(",")+2);

        let acc4 = accident4;
        let city4 = acc4.substring(0,acc4.indexOf(","));
        let buff4 = acc4.substring(acc4.indexOf(",")+2);
        let county4 = buff4.substring(0,buff4.indexOf(","));
        let state4 = buff4.substring(buff4.indexOf(",")+2);

        let acc5 = accident5;
        let city5 = acc5.substring(0,acc5.indexOf(","));
        let buff5 = acc5.substring(acc5.indexOf(",")+2);
        let county5 = buff5.substring(0,buff5.indexOf(","));
        let state5 = buff5.substring(buff5.indexOf(",")+2);
        
        if (!(accident1 == '')) {
        axios.get(`${serverURL}/accidents/state=${state}/county=${county}/city=${city}/year=2018`)
            .then((response) =>{
                console.log('hit');
                const info = response.data;

                setdata1({...data1,
                    city1: info,
                    city1Name: city,
                });
            }).catch((err) => {
                console.log(err);
            })
        }

        if (!(accident1 == '')) {
        axios.get(`${serverURL}/accidents/state=${state2}/county=${county2}/city=${city2}/year=2018`)
            .then((response2) =>{
                console.log('hit2');
                const info2 = response2.data;

                setdata2({...data2,
                    city2: info2,
                    city2Name: city2,
                });
            }).catch((err) => {
                console.log(err);
            })
        }

        if (!(accident1 == '')) {
        axios.get(`${serverURL}/accidents/state=${state3}/county=${county3}/city=${city3}/year=2018`)
        .then((response3) =>{
            console.log('hit3');
            const info3 = response3.data;

            setdata3({...data3,
                city3: info3,
                city3Name: city3,
            });
        }).catch((err) => {
            console.log(err);
        })
    }

        if (!(accident1 == '')) {
        axios.get(`${serverURL}/accidents/state=${state4}/county=${county4}/city=${city4}/year=2018`)
        .then((response4) =>{
            const info4 = response4.data;

            setdata4({...data4,
                city4: info4,
                city4Name: city4,
            });
        }).catch((err) => {
            console.log(err);
        })
    }

        if (!(accident1 == '')) {
        axios.get(`${serverURL}/accidents/state=${state5}/county=${county5}/city=${city5}/year=2018`)
        .then((response5) =>{
            const info5 = response5.data;

            setdata5({...data5,
                city5: info5,
                city5Name: city5,
            });
        }).catch((err) => {
            console.log(err);
        })
    }
        //alert('data has been set');
        alert("Cities submitted!\n" +
            "Please allow for up to 10 seconds after pressing 'OK' to view results in the graph.\n\n" +
            "If city data is missing, please look back and make sure you entered it in the correct format.\n" +
            "For example: Orlando, Orange, Florida");

    };
    const  handleSubmit3 = (e) =>{
        e.preventDefault();//Default
        const colors = [];

        setOption({
            title:{
                display:true,
                text:'Accidents',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              },    
              scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                    }
                }]
            }        
        });
        setBar({
            labels: [data1.city1Name,data2.city2Name,data3.city3Name,data4.city4Name,data5.city5Name],
            datasets: [
                {
                    label: 'Number of Accidents',
                    borderColor: 'rgba(0,0,0,1)',
                    backgroundColor: ['red','blue','green','pink','purple','yellow'],
                    borderWidth: 2,
                    data: [data1.city1, data2.city2, data3.city3, data4.city4, data5.city5]
                }
            ]
        }
    )};

    return (
        <Container style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <Card.Header>
                        <h1 style={styles.heading}>Accident Statistics</h1>
                    </Card.Header>
                    <Card.Description >
                       <h2> Enter Up to 5 Cities </h2>
                        <Grid columns={3} centered padded stackable>
                                <Grid.Column>
                                    <Segment color='blue' >
                                <Input type="name" placeholder="City, County, State" value={accident1}  onChange={handlechange1} />
                                    </Segment>
                            </Grid.Column>
                            <Grid.Column>
                            <Segment color='blue'>
                                <Input type="name" placeholder="City, County, State" value={accident2}  onChange={handlechange2} />
                            </Segment>
                            </Grid.Column>
                            <Grid.Column>
                            <Segment color='blue'>
                                <Input type="name" placeholder="City, County, State" value={accident3}  onChange={handlechange3} />
                            </Segment>
                            </Grid.Column>
                            <Grid.Column>
                            <Segment color='blue' >
                                <Input type="name" placeholder="City, County, State" value={accident4}  onChange={handlechange4} />
                            </Segment>
                            </Grid.Column>
                            <Grid.Column>
                            <Segment color='blue'>
                                <Input type="name" placeholder="City, County, State" value={accident5}  onChange={handlechange5} />
                            </Segment>
                            </Grid.Column>
                        </Grid>

                    </Card.Description>
                    <br></br>
                    <div align='center'>
                        <Button style={styles.button} compact color='blue'  onClick={handleSubmit2} icon labelPosition='right' >
                            Submit
                                <Icon name='arrow right' />
                        </Button>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        <Bar 
                            data = {barState}
                            options={optionState}
                        />
                        <br></br>
                        <Button style={styles.button} compact color='blue'  onClick={handleSubmit3} icon labelPosition='right' >
                            View Accident Data
                            <Icon name='arrow right' /></Button>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                    <Form style={styles.form}>
                        <h2 align='center'>Find Accident Data for a Specific State and Year</h2>
                        <br></br>
                        <Grid columns={2}>
                        <Grid.Column>
                            <Form.Field>
                                <label>State</label>
                                <input name={'state'} placeholder='Florida' value={form.state} onChange={handleChange} />
                            </Form.Field>
                        </Grid.Column>
                        <Grid.Column>
                            <Form.Field>
                                <label>Year</label>
                                <input name={'year'} type={'number'} placeholder='2016' value={form.year} onChange={handleChange}/>
                            </Form.Field>
                        </Grid.Column>
                        </Grid>
                        <br></br>
                        <br></br>
                        <div align='center'>
                            <Button style={styles.button} compact color='blue' onClick={handleSubmit} icon labelPosition='right' >
                                Get Number of accidents
                                <Icon name='arrow right' />
                            </Button>
                            <br></br>
                            <br></br>
                            <Segment compact color='blue'> Number of Accidents: {data.length}</Segment>
                        </div>
                        </Form>
                    </div>
                </Card.Content>
            </Card>
        </Container>
    );
}

export default Statistic_city;
