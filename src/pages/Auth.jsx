import React, { useState } from 'react';
import { fetchUsers } from '../components/Api';
import { Flex, Input, Button, Carousel  } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../components/BackButton';
import AppHeader from '../components/Header';
import { useAuth } from '../components/AuthContext';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

export const ButtonStyle = {
    marginTop: "10px",
    borderRadius: '10px',
    color: 'white',
    transition: ".2s linear",
    background: "#0B63F6",
  };


const Auth = () => {
    const navigate = useNavigate();
        const handleNavigationHome = (path) => {
            navigate(path);
        };
    
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        try {
            const users = await fetchUsers();
            const user = users.find(
                (u) =>
                    u.username === formData.username && u.password === formData.password
            );

            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                setSuccessMessage('Вы успешно вошли!');
                login();
                handleNavigationHome('/profile');
            } else {
                setError('Неверное имя пользователя или пароль.');
            }
        } catch (err) {
            setError('Ошибка при авторизации. Попробуйте позже.');
        }
    };

    return (
        <>
            <AppHeader/>
            <Flex align="center" justify="center" gap={200}>
            

                <div>
                    <h1>Авторизация</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Имя пользователя</label>
                            <Input
                                placeholder="Имя пользователя"
                                prefix={<UserOutlined />}
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                            <label>Пароль</label>
                            <Input.Password
                                placeholder="пароль"
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button style={ButtonStyle} type="submit">Войти</button>
                    </form>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                </div>

                <div style={{width:'500px'}}>
                    <Carousel autoplay
                        autoplaySpeed = {2000}
                        dotPosition="left"
                    >
                        <div>
                            <h3 style={contentStyle}> Обязательная экспертиза</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>Обширная база тестов</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>Прогноз поступления</h3>
                        </div>
                    </Carousel>
                </div>
            </Flex>
            <BackButton/>
        </>
    );
};

export default Auth;
