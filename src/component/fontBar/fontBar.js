import { useState } from 'react';
import Icon from '../../svg/index';
import './fontBar.css';
import { useNavigate } from 'react-router-dom';
function FontBar() {
    const [logoclick, setLogoclick] = useState(1);
    const [groundclick, setGroundclick] = useState(0);
    const [myclick, setMyclick] = useState(0);
    const navigate=useNavigate();
    return <div className='fontBar'>
        <div onClick={() => {
            setLogoclick(1);
            navigate('../home');
            setGroundclick(0);
            setMyclick(0)
        }}>
            {logoclick === 1 ?
                <div className='fontBarIcon'><Icon name='logo' width={35} /><div style={{ color: '#735FBF',fontSize:'14px' }}>地图</div></div> :
                <div className='fontBarIcon'><Icon name='logoLine' width={35} /><div style={{ fontSize:'14px' }}>地图</div></div>
            }
        </div>
        <div onClick={() => {
            navigate('../playground');
            setGroundclick(1);          
            setLogoclick(0);
            setMyclick(0)
        }}>
            {groundclick === 1 ?
                <div className='fontBarIcon'><Icon name='playground' width={35} /><div style={{ color: '#735FBF',fontSize:'14px' }}>广场</div></div> :
                <div className='fontBarIcon'><Icon name='playgroundLine' width={35} /><div style={{ fontSize:'14px' }}>广场</div></div>
            }
        </div>
        <div onClick={() => {
            setMyclick(1); setGroundclick(0); setLogoclick(0)
        }}>
            {myclick === 1 ?
                <div className='fontBarIcon'><Icon name='my' width={35} /><div style={{ color: '#735FBF',fontSize:'14px' }}>我的</div></div> :
                <div className='fontBarIcon'><Icon name='myLine' width={35} /><div style={{ fontSize:'14px' }}>我的</div></div>
            }
        </div>
    </div>
}

export default FontBar;