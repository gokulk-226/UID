import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Auth({ setUserId }) {
    const [isLogin, setIsLogin] = useState(true); // Toggle between login and register
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate(); // For programmatic navigation

    const handleAuth = async () => {
        if (!isLogin && password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const endpoint = isLogin ? 'login' : 'register';
        try {
            const response = await fetch(`http://localhost:5000/${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();

            if (response.ok) {
                if (isLogin) {
                    setUserId(data.userId);  // Set userId on successful login
                    navigate('/movies');  // Redirect to the movie app on login success
                } else {
                    alert('Registration successful! Please log in.');
                    setIsLogin(true);
                }
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error(`Error ${isLogin ? 'logging in' : 'registering'}:`, error);
        }
    };

    return (
        <div className="auth-container">
            <h1 className="project-title">MovieHouse</h1> {/* Project title */}
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {!isLogin && (
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            )}
            <button onClick={handleAuth}>{isLogin ? 'Login' : 'Register'}</button>
            <p>
                {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                <span
                    onClick={() => setIsLogin(!isLogin)}
                    style={{ color: 'blue', cursor: 'pointer' }}
                >
                    {isLogin ? 'Register here' : 'Login here'}
                </span>
            </p>
        </div>
    );
}
