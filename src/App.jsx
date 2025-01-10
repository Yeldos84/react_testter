import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import { Footer } from './components/Footer';
import { Tests } from './pages/Tests';
import Auth from './pages/Auth';
import TestPage from './pages/TestPage';
import Register from './pages/Register';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ApiPage } from './pages/ApiPage';
import { MessagePage } from './pages/MessagePage';
import { AuthProvider } from "./components/AuthContext";

const queryClient = new QueryClient();
const { Content } = Layout;

export const isAuthenticated = () => {
  const user = localStorage.getItem('user');
  return !!user; 
};

const PrivatRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/auth" />;
  }
  return children;
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Layout>
              <Content style={{ minHeight: '80vh' }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/test" element={!isAuthenticated() ? <MessagePage /> : <Navigate to="/tests" />} />
                  <Route path="/tests" element={<PrivatRoute><Tests /></PrivatRoute>} />
                  <Route path="/tests/:testId" element={<TestPage />} />
                  {/* <Route path="/results" element={<Results />} /> */}
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/api" element={<ApiPage />} />

                </Routes>
              </Content>
              <Footer />
            </Layout>
          </Router>
        </QueryClientProvider>
      </AuthProvider>

    </>
  )
}

export default App
