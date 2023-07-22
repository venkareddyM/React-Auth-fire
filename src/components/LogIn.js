import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState(null);
    const history = useNavigate(); 

    const MyEvent = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!data.email || !data.password) {
            setError('Please fill in all fields.');
            return;
          }

        signInWithEmailAndPassword(auth, data.email, data.password)
            .then(() => {
                history.push('/login'); 
            })
            .catch((error) => {
                setError('Error signing in: ' + error.message);
            });
    };

    return (
        <div className="containers">
            <div>
                <h3>Firebase Auth Login</h3>
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
                    <button onClick={handleSubmit}>Log In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
