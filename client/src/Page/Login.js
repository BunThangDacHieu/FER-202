import React, { useState } from 'react'
import Picture from '../picture/fpt.png'

const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted', { campus, username, password });
};

export default function Login() {
    const [campus, setCampus] = useState('DA NANG');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='Login' style={{ justifyItems: 'center' }}>
            <div className='logo'>
                <img src={Picture} alt='logo' className='login-logo' />
            </div>
            <div>
                <h2>The social constructive learning tool</h2>
                <h1 style={{ color: 'red' }}>University system (FU)</h1>
            </div>
            <div className='Signgg'>
                <p></p>
            </div>
            <div className=''>
                <p>Check if the current device has VPN enabled. Please turn it off.
                    If a notification appears "AN ERROR HAS OCCURRED" when login:
                    1: Refer to the instructions in Frequently Asked Question.
                    2: Check your mobile phone if you can access the system?. If unsuccessful, bring your device to the IT room</p>
            </div>
            <h2>Select a campus before sign in to the system with type username</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Campus</label>
                    <select value={campus} onChange={(e) => setCampus(e.target.value)}>
                        <option value="DA NANG">DA NANG</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder=""
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="login-button">LOGIN</button>
            </form>
            <p>Khi hệ thống quá tải và quay trở về đăng nhập lại</p>
            <a href="#">FREQUENTLY ASKED QUESTION</a>
            <p>IT HELP DESK - PHONE: +84 913677744</p>
            <p>Copyright © by FPT Education</p>
        </div>
    )
}
