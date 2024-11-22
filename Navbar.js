import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const role = localStorage.getItem('role');
    const isLoggedIn = !!localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/');
    };

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {isLoggedIn && role === 'Admin' && (
                    <>
                        <li>
                            <Link to="/inventory">Inventory</Link>
                        </li>
                        <li>
                            <Link to="/admin-panel">Admin Panel</Link>
                        </li>
                    </>
                )}
                {isLoggedIn && role === 'Manager' && (
                    <li>
                        <Link to="/inventory">Inventory</Link>
                    </li>
                )}
                {isLoggedIn && role === 'Viewer' && (
                    <li>
                        <Link to="/inventory">View Inventory</Link>
                    </li>
                )}
                {isLoggedIn ? (
                    <li>
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
