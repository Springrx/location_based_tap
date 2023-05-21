import { EyeFilled } from '@ant-design/icons';
import { Divider } from 'antd';
import { send } from '../../svg';
import './control.css'
import { useNavigate } from 'react-router-dom';

function PostControl() {
    const navigate = useNavigate();
    return <div className='post'>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'20%'}}
            onClick={()=>{
                navigate('../post');
            }}
        >{send}发帖</div>
        <Divider style={{marginTop:'10px',marginBottom:'10px',width:'80%',color:'#6C6C6C'}}/>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginBottom:'20%'}}><EyeFilled style={{ fontSize: '30px' }} />浏览</div>
    </div>
}
export default PostControl;