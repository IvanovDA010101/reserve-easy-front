import React, {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from "../../Context/AuthProvider";
import styles from './LoginPage.module.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
    const {login} = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://45.141.102.127:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password
                }),
            });

            if (!response.ok) {
                alert('Login Failed!');
            } else {
                const data = await response.json();
                login(data.token);
                navigate('/');
            }
        } catch (error) {
            alert(error);
            console.error('Login failed:', error);
        }
    };

    return (
        <div>
            <form className={styles.form} onSubmit={handleLogin}>
                <h2>Войти</h2>
                    <input
                        className={styles.login__input}
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className={styles.password__input}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Войти</button>
            </form>
        </div>
);
};

export default LoginPage;