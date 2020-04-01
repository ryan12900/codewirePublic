import React from "react";
import axios from 'axios';
import serverURL from '../../assets/server-url';
import { quizData } from "./QuizData";
import { Button } from 'semantic-ui-react';
import styles from "../../views/styles";
import '../../views/Quiz/QuizStyle.css';

//This file features modified code provide for free use by User NinjaAniket on codesandbox.io at https://codesandbox.io/s/reactquizapp-mty8j

class MainQuiz extends React.Component {
    state = {
        currentQuestion: 0,
        myAnswer: null,
        options: [],
        score: 0,
        disabled: true,
        isEnd: false
    };


    loadQuizData = () => {
        // console.log(quizData[0].question)
        this.setState(() => {
            return {
                questions: quizData[this.state.currentQuestion].question,
                answer: quizData[this.state.currentQuestion].answer,
                options: quizData[this.state.currentQuestion].options
            };
        });
    };

    componentDidMount() {
        this.loadQuizData();
    }
    nextQuestionHandler = () => {
        // console.log('test')
        const { myAnswer, answer, score } = this.state;

        if (myAnswer === answer) {
            this.setState({
                score: score + 1
            });
        }

        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        });
        console.log(this.state.currentQuestion);
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.currentQuestion !== prevState.currentQuestion) {
            this.setState(() => {
                return {
                    disabled: true,
                    questions: quizData[this.state.currentQuestion].question,
                    options: quizData[this.state.currentQuestion].options,
                    answer: quizData[this.state.currentQuestion].answer
                };
            });
        }
    }
    //check answer
    checkAnswer = answer => {
        this.setState({ myAnswer: answer, disabled: false });
    };


    finishHandler = () => {
        const { myAnswer, answer, score } = this.state;
        if (myAnswer === answer) {
            this.setState({
                score: score + 1
            });
        }

        if (this.state.currentQuestion === quizData.length - 1) {
            this.setState({
                isEnd: true
            });
        }
    };
    render() {
        const { options, myAnswer, currentQuestion, isEnd } = this.state;
        if (isEnd) {
            const {userId} = this.props;
            const {score} = this.state.score;
            axios.post(`${serverURL}/${userId}/quiz`, {score}).then(() => {
                alert("Your score was updated!")
            }).catch(() => {
                alert("There was an error updating your score!");
            });

            return (
                <div className="result">
                    <h3>Questions correct: {this.state.score} out of {quizData.length}</h3>
                    <p>
                        The correct answers for the questions were
                        <ul>
                            {
                                quizData.map((item, index) => (
                                <li className="ui floating message options" key={index}>
                                    {item.answer}
                                </li>
                            ))}
                        </ul>
                    </p>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <h1>{this.state.questions} </h1>
                    <span>{`Question ${currentQuestion + 1}  out of ${quizData.length}`}</span>
                    {
                        options.map(option => (
                        <p
                            key={option.id}
                            className={`ui floating message options ${myAnswer === option ? "selected" : null}`}
                            onClick={() => this.checkAnswer(option)}
                        >
                            {option}
                        </p>
                    ))}
                    {
                        currentQuestion < quizData.length - 1 && (
                        <Button
                            //className="ui inverted button"
                            disabled={this.state.disabled}
                            onClick={this.nextQuestionHandler}
                            style={styles.button}
                        >
                            Next
                        </Button>
                    )}
                    {/* //adding a finish button */}
                    {
                        currentQuestion === quizData.length - 1 && (
                        <Button /*className="ui inverted button"*/ onClick={this.finishHandler} style={styles.button} disabled={this.state.disabled}>
                            Finish
                        </Button>
                    )}
                </div>
            );
        }
    }
}

export default MainQuiz;