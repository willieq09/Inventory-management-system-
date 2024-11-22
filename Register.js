import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [user, setUser] = useState({ username: '', password: '', role: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/register', user);
            alert('Registration successful!');
        } catch (error) {
            alert('Registration failed!');
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
                <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                    <option value="">Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Manager">Manager</option>
                    <option value="Viewer">Viewer</option>
                </select>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
