import React from "react";
import './modal.css'
import closeIcon from "../../assets/close-form-btn.png";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                {children}
                <img className="close-modal-btn" src={closeIcon} onClick={onClose} alt="" />
            </div>
        </div>
    )
}
