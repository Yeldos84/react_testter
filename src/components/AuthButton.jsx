import React from "react";
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export const AuthButton = () => {
    const navigate = useNavigate();
    const handleNavigationHome = (path) => {
        navigate(path);
    };

    return (
        <Button color="primary" variant="solid" onClick={() => handleNavigationHome('/auth')}>Войти</Button>
    );
};



