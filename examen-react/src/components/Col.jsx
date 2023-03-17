import React from 'react';

const Col = ({ title }) => {
    return (
        <div>
            <div className='d-flex flex-row'>
                <section>
                    <div className='col-lg-3'>
                        <div className='d-flex align-items-center'>
                            <button className='btn btn-success'> + </button>
                            <h3> {title} </h3>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Col;