import React, { useState } from 'react';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const emailChange = (e) => {
    setEmail(e.target.value);
    }

    const passChange = (e) => {
        setPass(e.target.value);
    }

    const nameChange = (e) => {
        setName(e.target.value)
    }

     return (
        <div className='auth-form-container'>
             <form onSubmit={handleSubmit} className='register-form'>
                 <label htmlFor='full name'>Full name</label>
                 <input onChange={nameChange} value={name} name='name' id='name' placeholder='full name'/>
                <label htmlFor='email'>email</label>
                <input onChange={emailChange} value={email} type='email' placeholder='youremail@email.com' id='email' name='email' />
                <label htmlFor='password'>password</label>
                <input onChange={passChange} value={pass} type='password' placeholder='*****' id='password' name='password' />
                <button type='submit'>Login</button>
             </form>
             
            <button className="link-btn" onClick={() => props.toggleForm('login')}>Already have an account? Login</button>
        </div>
        );
}