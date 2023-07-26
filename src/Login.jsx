import React, { useState } from 'react';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const emailChange = (e) => {
        setEmail(e.target.value);
    }

    const passChange = (e) => {
        setPass(e.target.value);
    }

    return (
        <div className='auth-form-container'>
            <form onSubmit={handleSubmit} className='login-form'>
                <label htmlFor='email'>email</label>
                <input onChange={emailChange} value={email} type='email' placeholder='youremail@email.com' id='email' name='email' />
                <label htmlFor='password'>password</label>
                <input onChange={passChange} value={pass} type='password' placeholder='*****' id='password' name='password' />
                <button type='submit'>Login</button>
            </form>
            
            <button className="link-btn" onClick={() => props.toggleForm('register')}>Don't have any account? Register</button>
        </div>
        );
}