import { logo, userName, pwd } from '../svg';
import './playground.css';

import { useNavigate } from 'react-router-dom';
function Playground() {
  const slogan = "这里是广场";
  const navigate = useNavigate();

  return (
    <div>
        {slogan}
       </div>
  );
}

export default Playground;
