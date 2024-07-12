import React from 'react'
import Picture from '../picture/fpt.png'
import '../css/Logo.css'

export default function Logo() {
    return (
        <div className="logo-container">
            <img src={Picture} alt="Logo" className="logo-image" />
        </div>
    );
}
