import React from "react";
import './modal.css'

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
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>
    )
}
