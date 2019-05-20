import { LOAD_QUESTIONS,
         LOAD_QUESTIONS_SUCCESS,
         LOAD_QUESTIONS_FAIL } from './types';
import axios from 'axios';

export const getQuestions = () => dispatch=>{
    dispatch({
        type: LOAD_QUESTIONS
    });

    axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
        .then((response) => {
            console.log("DATA",response)
            dispatch({
                type: LOAD_QUESTIONS_SUCCESS,
                payload: response.data
            })
        })
        .catch((error) => {
            dispatch({
                type: LOAD_QUESTIONS_FAIL
            });
        });
}