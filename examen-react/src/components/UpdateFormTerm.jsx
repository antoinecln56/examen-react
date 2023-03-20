import React from 'react';

const UpdateFormTerm = ({inputRef, onSubmitUpdateTerm}) => {
    return (
        <div>
            <form onSubmit={(e) => { onSubmitUpdateTerm(e) }}>
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
                    Modifier
                </button>
            </form>
        </div>
    );
};

export default UpdateFormTerm;