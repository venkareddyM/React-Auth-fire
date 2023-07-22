import React, { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../firebase';
import { Link } from 'react-router-dom'

const Signup = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState(null); 

    const MyEvent = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

       
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                return sendEmailVerification(userCredential.user);
            })
            .catch((error) => {
                setError('Error creating user: ' + error.message);
            });
    };

    return (
        <div className="containers">
            <div >
                <h3>Firebase Auth Signup</h3>
                {error && <div>{error}</div>}
                <form>
                    <div>
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            onChange={MyEvent}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={MyEvent}
                        />
                    </div>
                    <button onClick={handleSubmit}>Sign Up</button>
                </form>
            </div>
            <div>
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </div>
    );
};

export default Signup;
