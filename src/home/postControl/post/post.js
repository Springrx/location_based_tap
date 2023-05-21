import { Button,Input } from "antd";
import UploadPic from "./uploadPic";
import Video from "./video";
import './post.css';
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;
function Post(){
    const navigate=useNavigate();
    return <div className="postPosts">
       <div className="headControl">
        <div onClick={()=>{navigate('../home')}}>取消</div>
        <Button style={{background:"#735FBF",fontSize:'18px',color:"white",height:'37px'}}>发帖</Button>
        </div>
        <div className="postBody">
        <TextArea rows={4} placeholder="在此地，此刻的想法" maxLength={1000} />

           
            <div style={{marginTop:'8%',display:'flex',justifyContent:'center',alignItems:'center'}}><UploadPic /></div>
            <div style={{marginTop:'8%'}}><Video/></div>

            </div> 
    </div>
}
export default Post;