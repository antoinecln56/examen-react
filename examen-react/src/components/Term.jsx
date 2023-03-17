import React, { useState } from 'react';

const Term = ({ term, onClickTerm }) => {

    return (
        <div>
            <section>
                <li className="nav-item" role='presentation' onClick={onClickTerm}>
                    <button className='btn btn-warning' type="button" role="tab" >{term.title}</button>
                </li>
                
            </section>
        </div>
    );
};

export default Term;