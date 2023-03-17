import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CardFormAdd = () => {
    return (
        <div>
            <Modal className='modal-dialog modal-lg'>
                <div className='modal-content'>
                    <header className='d-flex justify-content-between modal-header'>
                        <h4 className='modal-title h4'>Gérer la card</h4>
                    </header>
                </div>
            </Modal>
        </div>
    );
};

export default CardFormAdd;