import { logo, userName, pwd } from '../svg';
import './playground.css';
import FontBar from '../component/fontBar/fontBar';
import { useNavigate } from 'react-router-dom';
function Playground() {
  const slogan = "开发人员正在开发。。。";
  const navigate = useNavigate();

  return (
    <div>
        {slogan}
        <FontBar />
       </div>
  );
}

export default Playground;
