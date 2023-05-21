import {  userName, pwd,phone } from '../../svg.js';
import '../login.css';
import './register.css'
import { Button, message } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { register } from '../service.js';
import { validUserName } from '../service.js';
import Icon from '../../svg/index.js';
function Register() {
  const slogan = "注册后开启“到处”旅程";
  const navigate = useNavigate();
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const[isRepeat,setIsRepeat]=useState(0);
  async function validUser(user){
    const res= await validUserName(user);
    if(res!==null){
      setIsRepeat(1);
    }
    else{
      setIsRepeat(0);
    }
  }
  async function userRegister(){
    if(isRepeat===1){
      message.error('用户名重复，请重试！')
    }
    else{
    if(username!==''&&password!==''&&isRepeat!==1){
    const userInfo={username:username,password:password};
    const res=await register(userInfo);
    if(res){
      message.success('注册成功');
      navigate('./verification');
    }}
    else{
      message.error('请输入用户名和密码');
    }}
  }
  return (
    <div >
      <div className='back' onClick={()=>{navigate('/')}}>
        <ArrowLeftOutlined style={{ fontSize: '30px' }} /><span style={{ fontSize: '18px', marginLeft: '5%' }}>注册</span>
      </div>
      <div className="App">
        <div className='head'>
          <div><Icon name='logo' width={90}/></div>
          <div className='slogan'>{slogan}</div>
          <div className='inputBox' >
            {userName}<input onChange={(e)=>{setUsername(e.target.value);validUser(e.target.value);}} value={username} placeholder="用户名" style={{ marginLeft: "5%", backgroundColor: '#EFEFEF', border: 0, height: '70%' }} /> 
          </div>
          <p>{isRepeat===0?'':'用户名已存在，请重新输入'}</p>
          <div className='inputBox' >
            {pwd}<input onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder="密码" style={{ marginLeft: "5%", backgroundColor: '#EFEFEF', border: 0, height: '70%' }} />
          </div>
          <div className='inputBox' style={{ marginTop: "8%" }}>
            {phone}<input placeholder="绑定手机号码" style={{ marginLeft: "5%", backgroundColor: '#EFEFEF', border: 0, height: '70%' }} />
          </div>
        </div>
        <Button type="primary" onClick={()=>{
          userRegister(username);
        }} style={{ backgroundColor: '#5134AB', borderRadius: '40px', width: '300px', height: '50px', fontSize: '18px', marginTop: '14%' }}>发送验证码</Button>
        </div>
    </div>
  );
}

export default Register;
