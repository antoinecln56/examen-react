import React from 'react';


const CardFormAdd = ({ onSubmitAddCard, onChangeQuestion, onChangeAnswer, question, answer  }) => {
    return (
        <div>
            <form onSubmit={(e) => { onSubmitAddCard(e) }}>
                <div className="form-group">
                    <label htmlFor="question">Carte</label>
                    <input
                        type="text"
                        className="form-control"
                        id="question"
                        value={question}
                        onChange={(e) => { onChangeQuestion(e.target.value) }}
                    />
                    <input
                        type="text"
                        className="form-control"
                        id="answer"
                        value={answer}
                        onChange={(e) => { onChangeAnswer(e.target.value) }}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Ajouter
                </button>
            </form>
        </div>
    );
};

export default CardFormAdd; 
