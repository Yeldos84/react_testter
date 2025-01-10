import React from "react";
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
    const navigate = useNavigate();
    const handleNavigationHome = (path) => {
        navigate(path);
    };

    return (
        <Button style={{marginTop: "20px"}} type="dashed" onClick={() => handleNavigationHome('/')}>На Главную</Button>
    );
};



