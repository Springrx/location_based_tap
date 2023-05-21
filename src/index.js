import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './login/login'
import Register from './login/register/register';
import Verification from './login/register/verification';
import reportWebVitals from './reportWebVitals';
import Home from './home/home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ForgetPwd from './login/forgetPwd/forgetPwd';
import Post from './home/postControl/post/post';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/register/verification" element={<Verification/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/post" element={<Post/>}/>
    <Route path="/forgetPwd" element={<ForgetPwd/>}/>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
