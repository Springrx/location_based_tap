import { Button, Input, message } from "antd";
import UploadPic from "./uploadPic";
import Video from "./video";
import './post.css';
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { addPost, addPostImage } from '../../service'
const { TextArea } = Input;
function Post() {
    const location = useLocation();
    const user_id = location.state.user_id;
    const position = location.state.position;
    const lat = position.lat;
    const lng = position.lng;

    const [text, setText] = useState('');
    const [imgList, setImgList] = useState([]);
    const [videoUrl, setVideoUrl] = useState('');
    const navigate = useNavigate();
    const post = {
        user_id: user_id,  //从home界面拿过来
        location_x: lng !== undefined ? lng : message.error('定位有误，请取消重试'), //x表示纬度lng
        location_y: lat !== undefined ? lat : message.error('定位有误，请取消重试'), //y表示经度lat
        text: text,
        video_url: ''
        // video_url:'bc94df6e-e99d-4faa-bcea-fa0ab9cbede5.mp4'  
    }
    const getImgList = (fileList) => {
        setImgList(fileList);
    }
    //存储帖子的文本和视频url，上传帖子后拿到帖子的id，然后去存储照片（支持一个帖子多张图片和一个视频）
    const savePost = async (post) => {
        debugger
        try{
        await addPost(post).then(callback => {
            debugger
            imgList.map(
                async item => {
                    if (item.status === 'done') {
                        await addPostImage(JSON.parse(item.response.data).url, callback);
                    }
                }
            )
        }).then(()=>{
            message.success('发帖成功');
            navigate('../home', { state: { user_id: user_id, position: position } });}
        )}catch(e){
            console.log(e);
        }
    }

    const getVideoUrl = (videoUrl) => {
        setVideoUrl(videoUrl);
    }
    return <div className="postPosts">
        <div className="headControl">
            <div onClick={() => { navigate('../home', { state: { user_id: user_id, position: position } }) }}>取消</div>
            <div onClick={() => {
                    debugger
                    savePost(post);
                }}
            ><Button style={{ background: "#735FBF", fontSize: '18px', color: "white", height: '37px' }}
            >发帖</Button>
            </div>
        </div>
        <div className="postBody">
            <TextArea rows={4} placeholder="在此地，此刻的想法" maxLength={1000}
                onChange={(e) => {
                    setText(e.target.value)
                }}
                value={text} />
            <div >
                <div style={{ marginTop: '8%', display: 'flex' }}><UploadPic getImgList={getImgList} /></div>
                <div style={{ marginTop: '8%' }}><Video getVideo={getVideoUrl} /></div>
            </div>
        </div>
    </div>
}
export default Post;