import React, { useState } from 'react';
import { addTerm } from '../services/TermService';

const AddTermForm = ({ inputRef, onSubmitAddTerm }) => {

    return (
        <div>
            <form onSubmit={onSubmitAddTerm}>
                <div className="form-group">
                    <label htmlFor="title">Thématique</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        ref={inputRef}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Ajouter
                </button>
            </form>
        </div>
    );
};

export default AddTermForm;