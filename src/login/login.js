import {  userName, pwd } from '../svg';
import './login.css';
import { Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { login } from './service';
import { useState } from 'react';
import Icon from '../svg/index';
function Login() {
  const slogan = "开启“到处”旅程";
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function loginApp(username, password) {
    var is_manager;
    if (username === '' || password === '') {
      message.error('请输入用户名和密码')
    }
    else {
      try {
        //管理员name：admin, password：loca123
        if (username === 'admin') {
          is_manager = 1;
        }
        else is_manager = 0;
        const user = { userName: username, pwd: password, is_manager: is_manager };
        const res = await login(user);
        const user_id=res.user_id;
        debugger
        if (res) {
          navigate('home',{ state: { user_id:  user_id  } });
        }
        else message.error('登录失败');
      }
      catch (e) {
        console.log(e);
      }
    }
  }
  return (
    <div className="App">
      <div className='head'>
      <div><Icon name='logo' width={90}/></div>
        <div className='slogan'>{slogan}</div>
        <div className='inputBox' >
          {userName}<input value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder="用户名" style={{ marginLeft: "5%", backgroundColor: '#EFEFEF', border: 0, height: '70%' }} />
        </div>
        <div className='inputBox' style={{ marginTop: "8%" }}>
          {pwd}<input value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="密码" style={{ marginLeft: "5%", backgroundColor: '#EFEFEF', border: 0, height: '70%' }} />
        </div>
        <p style={{ color: '#5134AB', fontSize: '14px', marginTop: '5%' }} onClick={() => { navigate('forgetPwd') }}>忘记密码？</p>
      </div>
      <Button type="primary" style={{ backgroundColor: '#5134AB', borderRadius: '40px', width: '300px', height: '50px', fontSize: '18px', marginTop: '5%' }}
        onClick={() => {
          loginApp(username, password);
        }}>登录</Button>
      <p style={{ fontSize: '14px', marginTop: '10%' }}><span style={{ color: '#9A9A9A' }}>没有账户？</span><span style={{ color: '#5134AB' }} onClick={() => { navigate('Register') }}>快速注册</span></p>
    </div>
  );
}

export default Login;
