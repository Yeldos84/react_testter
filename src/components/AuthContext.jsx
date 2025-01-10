import React, { createContext, useContext, useState } from 'react';
import { isAuthenticated } from '../App';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('user'));

    const login = () => setLoggedIn(true);
    const logout = () => {
        localStorage.removeItem('user');
        setLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ loggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
