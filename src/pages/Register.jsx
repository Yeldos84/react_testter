// src/components/UserForm.js
import React, { useState } from 'react';
import axios from 'axios';
import img from "../assets/register (1).png"
import { Flex, Input, Button  } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { ButtonStyle } from './Auth';
import AppHeader from '../components/Header';

const Register = () => {

    const navigate = useNavigate();
        const handleNavigationHome = (path) => {
            navigate(path);
        };

    const [username, setUsername] = useState('');
    const [password, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    const ButtonSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            username,
            password
        };

        try {
            const response = await axios.post("http://127.0.0.1:8081/api/users/", userData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setMessage('Пользователь успешно создан!');
            setTimeout(handleNavigationHome, 2000, '/')
            
            console.log(response.data);
        } catch (error) {
            setMessage('Ошибка при создании пользователя');
            console.error(error);
        }
    };

    return (

        <>  
            <AppHeader/>
            <Flex align="center" justify="center" gap={200}>

                <div style={{ width: "500px" }}>
                    <img src={img} alt="img" />
                </div>
                <div>
                    <h2>Регистрация</h2>
                    <form onSubmit={ButtonSubmit}>
                        <div>
                            <label>Имя пользователя:</label>
                            <Input
                                placeholder="Имя пользователя"
                                prefix={<UserOutlined />}
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Пароль:</label>
                            <Input.Password
                                placeholder="пароль"
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                type="password"
                                value={password}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button style={ButtonStyle} type="submit">Зарегистрироваться</button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </Flex>
        </>

    );
};

export default Register;
