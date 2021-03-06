import React from 'react';
import MainQuiz from "../../components/QuizComponent/MainQuiz";
import '../main.css';
import styles from '../styles';
import {Card, Container} from "semantic-ui-react";


function Quiz(props){
    console.log(props)
    return(
        <Container style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <Card.Header>
                        <h  style={styles.heading}>Driving Quiz</h>
                    </Card.Header>

                </Card.Content>
                <MainQuiz auth={props.auth}/>
            </Card>
            {/*<Card style={styles.card}>
                <MainQuiz />
            </Card>*/}
        </Container>
    );
}

export default Quiz;