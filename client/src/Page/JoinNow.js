import React from 'react'
import { Button } from 'flowbite-react';
import Picture from '../picture/image.png'
import { Link } from 'react-router-dom';

export default function JoinNow() {
    return (
        <div style={{ justifyContent: 'center', alignContent: 'center', justifyItems: 'center', alignItems: 'center' }}>
            <h1>
                Social Constructive Learning
            </h1>
            <h3>Construct knowledge and personalize the learning way to empower learners' full potential.
            </h3>
            <Link to="/Login">
                <Button style={{ color: 'blue', alignItems: 'center' }}>
                    Join Now
                </Button>
            </Link>
            <div className="logo-container">
                <img src={Picture} alt="Logo" className="logo-image" />
            </div>
        </div>
    )
}
