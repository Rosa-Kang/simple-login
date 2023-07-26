import React, { useState } from 'react';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className='auth-form-container'>
            <form onSubmit={handleSubmit} className='login-form'>
                <label htmlFor='email'>email</label>
                <input value={email} type='email' placeholder='youremail@email.com' id='email' name='email' />
                <label htmlFor='password'>password</label>
                <input value={pass} type='password' placeholder='*****' id='password' name='password' />
                <button type='submit'>Login</button>
            </form>
            
            <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Don't have any account? Register</button>
        </div>
        );
}