import React from 'react';

const Card = ({ card, colId }) => {
    return (
        <div>
            {card.colId === colId && (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{card.question}</h5>
                        <p className="card-text">{card.answer}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;