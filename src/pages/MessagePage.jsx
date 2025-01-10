import React from "react";
import { BackButton } from "../components/BackButton"
import { Navigate } from "react-router-dom";
import { AuthButton } from "../components/AuthButton";
import AppHeader from "../components/Header";

export const MessagePage = () => {
    return (
        <>  
            <AppHeader/>
            <h1>Данная страница доступна только для авторизованных пользователей!</h1>
            <div><AuthButton/></div>
            
            <BackButton />


        </>
    );
};



