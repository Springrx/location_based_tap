import '../login';
import './register.css'
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {sucIcon} from '../../svg'
function Verification() {
const [success,setSuccess]=useState(1);
  const navigate = useNavigate();
  return (
    <div >
      <div className='back' onClick={()=>{navigate('../Register')}}>
        <ArrowLeftOutlined style={{ fontSize: '30px' }} /><span style={{ fontSize: '18px', marginLeft: '5%' }}>注册</span>
      </div>
      <div className="App">
        <div className='head'>
        {/* <p style={{fontSize:'14px',color:'#333333'}}>验证码已发送至</p> */}
        <div className='verificationBox'>
          <input  className='codeBox'  />
          <input  className='codeBox'/>
          <input  className='codeBox' />
          <input  className='codeBox'/>
          </div>
        <p style={{fontSize:'14px',color:'#333333',marginTop:'15%'}}><span>cal time</span><span>s后可以</span><span style={{color:'#5134AB'}}>再次发送</span></p>
        </div>
        <Button type="primary" onClick={()=>{setSuccess(1)}} style={{ backgroundColor: '#5134AB', borderRadius: '40px', width: '300px', height: '50px', fontSize: '18px', marginTop: '10%' }}>确认</Button>
        </div>
        {success===1&&<div>
            <div className='grayScreen'></div>
            <div className='sucCard'>
                <div className='icon' style={{marginTop:'30%'}}>{sucIcon}</div>
                <p style={{fontSize:'20px',color:'#5134AB',fontWeight:'bolder'}}>注册成功</p>
                <p style={{width:'80%',fontSize:'14px',lineHeight:'25px'}}>您已成功注册账号，<span style={{color:'#5134AB'}} onClick={()=>{navigate('../../home')}}>点击</span><span>自动跳转登录，开启“到处”旅行！</span></p>
                </div>
        </div>}
    </div>
  );
}

export default Verification;
