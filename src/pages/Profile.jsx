import React from "react";
import { BackButton } from "../components/BackButton"
import AppHeader from "../components/Header";
import { UserOutlined } from '@ant-design/icons';
import { useAuth } from '../components/AuthContext';
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";

const imgStyle = {
    display: 'inline-block',
    width: '100px',
    height: '100px',
    lineHeight: '50px',
    textAlign: 'center',
    borderRadius: '50%',
    border: '2px solid black',
}

const Profile = () => {
    const { loggedIn, logout } = useAuth();

    const navigate = useNavigate();
        const handleNavigationHome = (path) => {
            navigate(path);
        };

    const name = localStorage.getItem('user');
    let username = JSON.parse(name) || 'значение по умолчанию';
    
    // console.log(username);
    

    return (
        <>  <AppHeader/>
            <h1>Профиль пользователя:</h1>
            <div><UserOutlined style={{fontSize: '100px'}}/></div>
            { ( username.username ?
            <h2>Добро пожаловать, <h1 style={{color: 'blue'}}>{username.username}</h1> <Button color="primary" variant="outlined" onClick={() => navigate('/tests')} style={{ marginRight: '10px' }}>
            Можете пройти тестирование
          </Button></h2>
            
            :<p>Вы не авторизованы <Button type="primary" onClick={() => navigate('/auth')} style={{ marginRight: '10px' }}>
                      Войти
                    </Button></p> ) }
        </>
    );
};

export default Profile;

