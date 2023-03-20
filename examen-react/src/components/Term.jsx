import React, { useState, useRef } from 'react';
import { updateTerm } from '../services/TermService';
import './../sass/index.scss'
import UpdateFormTerm from './UpdateFormTerm';

const Term = ({ term, onClickTerm, onClickDelete, terms, setTerms}) => {

    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const inputRef = useRef(null);

    const handleShowUpdateForm = () => {
        setShowUpdateForm(true);
    }

    const handleSubmitUpdateTerm = async (e) => {
        e.preventDefault();
        const newTitle = { id: term.id, title: inputRef.current?.value };
        await updateTerm(newTitle);
        setShowUpdateForm(false);
    } 

    return (
        <div>
        <section>

                <li className="nav-item" role='presentation'>
                    <button className='btn btn-warning btn-espace' type="button" role="tab" onClick={() => { onClickTerm(term.id) }}>{term.title}</button>
                    <button className="btn btn-success bi bi-pencil-fill black" onClick={handleShowUpdateForm}></button>
                    <button className="btn btn-danger bi bi-trash3" onClick={() => { onClickDelete(term.id) }}></button>
                </li>

        </section>
        {showUpdateForm && <UpdateFormTerm inputRef={inputRef} onSubmitUpdateTerm={handleSubmitUpdateTerm}/>}
        </div>
    );
};

export default Term;