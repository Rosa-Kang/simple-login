import React, { useState } from 'react';

export const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = () => {
        
    }

     return (
        <div className='auth-form-container'>
             <form onSubmit={handleSubmit} className='register-form'>
                 <label htmlFor='full name'>Full name</label>
                 <input value={name} name='name' id='name' placeholder='full name'/>
                <label htmlFor='email'>email</label>
                <input value={email} type='email' placeholder='youremail@email.com' id='email' name='email' />
                <label htmlFor='password'>password</label>
                <input value={pass} type='password' placeholder='*****' id='password' name='password' />
                <button type='submit'>Login</button>
             </form>
             
            <button className='link-btn' onClick={() => props.onFormSwitch('login')}>Already have an account? Login</button>
        </div>
        );
}