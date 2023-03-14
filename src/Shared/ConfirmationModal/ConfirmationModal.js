import React from 'react';

const ConfirmationModal = ({title,message,closeModal,successAction,successButtonName,modalData}) => {
    return (
        <div>


            <input type="checkbox" id="confirmation-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">{title}</h3>
                    <p class="py-4">{message}</p>
                    <div class="modal-action">
                        <label onClick={()=>successAction(modalData)} for="confirmation-modal" class="btn btn-primary">{successButtonName}</label>
                        <button onClick={closeModal} className='btn btn-outline'>cancel</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ConfirmationModal;
