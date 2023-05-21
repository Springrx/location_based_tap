import '../login.css';
import './forgetPwd.css'
import forgetPwdIcon from './暂无地址.svg'
import { Button } from 'antd';
import { ArrowLeftOutlined, MessageFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function ForgetPwd() {
    const[isInput,setIsInput]=useState(0);
    const navigate = useNavigate();
    return (
        <div >
            <div className='back' onClick={() => { navigate('/') }}>
                <ArrowLeftOutlined style={{ fontSize: '30px' }} /><span style={{ fontSize: '18px', marginLeft: '5%' }}>忘记密码</span>
            </div>
            <div className="App">
                <div className='contentLayout'>
                    {!isInput&&<img style={{ width: '300px',marginTop:'8%' }} src={forgetPwdIcon} />}
                    <p style={{marginTop:'15%'}}>输入与用户名绑定的<span style={{ color: '#5134AB' }}>手机号码</span>，重置密码</p>
                    <div className='message' >
                        <div className='messageIcon'>
                            <MessageFilled className='MessageFilled' />
                        </div>
                        <input placeholder="输入手机号码" style={{ marginLeft: "5%", border: 0, height: '70%' }} onChange={()=>{setIsInput(1);}}/>
                    </div>
                </div>
                {isInput===1&&<Button type="primary" onClick={() => {
                    //checkPhoneNumber
                    navigate('./verification')
                }} style={{ backgroundColor: '#5134AB', borderRadius: '40px', width: '300px', height: '50px', fontSize: '18px', marginTop: '14%' }}>继续</Button>}
            </div>
        </div>
    );
}

export default ForgetPwd;
