import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { HomeOutlined, FileTextOutlined, UserOutlined,  ApiOutlined } from '@ant-design/icons';
import { useAuth } from './AuthContext';


const { Header } = Layout;

const AppHeader = () => {
  const navigate = useNavigate();
  const { loggedIn, logout } = useAuth();

  const menuItems = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: 'Главная',
      onClick: () => navigate('/'),
    },
    {
      key: 'tests',
      icon: <FileTextOutlined />,
      label: 'Тесты',
      onClick: () => navigate('/test'),
    },
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Профиль',
      onClick: () => navigate('/profile'),
    },
    {
      key: 'api',
      icon: <ApiOutlined />,
      label: 'Api',
      onClick: () => navigate('/api'),
    },
  ];

  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#001529' }}>
      {/* Логотип */}
      <div style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => navigate('/')}>
        Testter.kz
      </div>

      {/* Меню */}
      <Menu theme="dark" mode="horizontal" items={menuItems} style={{ flexGrow: 1, marginLeft: '20px' }} />

      {/* Кнопки авторизации */}
      <div>
        {loggedIn  ? (
          <Button type="primary" onClick={logout} style={{ marginRight: '10px'}}>
          Выйти
        </Button>) : (
        <Button type="primary" onClick={() => navigate('/auth')} style={{ marginRight: '10px' }}>
          Войти
        </Button>)}
      </div>
      <div>
        <Button onClick={() => navigate('/register')}>
          Регистрация
        </Button>
      </div>
    </Header>
  );
};

export default AppHeader;
