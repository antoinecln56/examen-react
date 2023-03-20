import React, { useState, useRef } from 'react';
import { addCard } from '../services/CardService';
import CardFormAdd from './CardFormAdd';

const Col = ({ title, cards, setCards }) => {

    const [showForm, setShowForm] = useState(false);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("")

    const handleShowForm = () => {
        setShowForm(true);
    }

    const handleChangeQuestion = (newQuestion) => {
        setQuestion(newQuestion);
    }

    const handleChangeAnswer = (newAnswer) => {
        setAnswer(newAnswer);
    }

    const handleSubmitAddCard = async (e) => {
        e.preventDefault();
        const new_card = {
            question: question,
            answer: answer,
            termId: 1,
            colId: 1
        }
        setCards([...cards, new_card]);
        setQuestion("");
        setAnswer("");
        await addCard(new_card);
    }

    return (
        <div>
            <section>
                <div className='col-lg-3'>
                    <div className='d-flex align-items-center'>
                        <button className='btn btn-success' onClick={handleShowForm}>+</button>
                        <h3> {title} </h3>
                    </div>
                    {showForm && <CardFormAdd question={question} answer={answer} onChangeQuestion={handleChangeQuestion} onChangeAnswer={handleChangeAnswer} onSubmitAddCard={handleSubmitAddCard} />}
                </div>
            </section>
        </div>
    );
};

export default Col;