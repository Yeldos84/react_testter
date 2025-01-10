import React from "react";
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export const RegButton = () => {
    const navigate = useNavigate();
    const handleNavigationHome = (path) => {
        navigate(path);
    };

    return (
        <Button color="danger" variant="solid" onClick={() => handleNavigationHome('/register')}>Зарегистрироваться</Button>
    );
};



