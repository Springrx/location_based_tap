import './browse.css';
import { Divider, Image } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate,useLocation } from 'react-router-dom';
import { useState,useEffect } from "react";
import { getPost,getUsernameAndAva,getPostImage } from '../../service';
//browse正在开发阶段。。。
const postdata = 
[{
    ava: 'https://dthezntil550i.cloudfront.net/p4/latest/p42102052243097410008650553/1280_960/12bc8bc0-2186-48fb-b432-6c011a559ec0.png',
    username: 'xiao',
    postText: '春天又到了',
    postPhoto: ['https://dthezntil550i.cloudfront.net/p4/latest/p42102052243097410008650553/1280_960/12bc8bc0-2186-48fb-b432-6c011a559ec0.png',
        'https://cdn.pixabay.com/photo/2023/05/21/10/03/flower-8008187_1280.jpg',
        'https://cdn.pixabay.com/photo/2023/05/21/10/03/flower-8008187_1280.jpg',
        'https://cdn.pixabay.com/photo/2023/05/21/10/03/flower-8008187_1280.jpg'],
    postVideo: '',
    postComment: [{ commentUserName: '小新', commentUserAva: './1.png', commentText: '是啊是啊是啊是啊是啊是啊是啊是啊是啊', commentPic: '', commentVideo: '' },
    { commentUserName: '小圆', commentUserAva: './1.png', commentText: '欢迎', commentPic: '', commentVideo: '' },
    { commentUserName: '熊妈', commentUserAva: './1.png', commentText: '', commentPic: 'https://cdn.pixabay.com/photo/2023/05/21/10/03/flower-8008187_1280.jpg', commentVideo: '' }
    ]
},
{
    ava: 'https://dthezntil550i.cloudfront.net/p4/latest/p42102052243097410008650553/1280_960/12bc8bc0-2186-48fb-b432-6c011a559ec0.png',
    username: '小熊',
    postText: '春天又到了',
    postPhoto: ['https://dthezntil550i.cloudfront.net/p4/latest/p42102052243097410008650553/1280_960/12bc8bc0-2186-48fb-b432-6c011a559ec0.png',
        'https://cdn.pixabay.com/photo/2023/05/21/10/03/flower-8008187_1280.jpg',
        'https://cdn.pixabay.com/photo/2023/05/21/10/03/flower-8008187_1280.jpg'],
    postVideo: '',
    postComment: [{ commentUserName: '小新', commentUserAva: './1.png', commentText: '是啊是啊是啊是啊是啊是啊是啊是啊是啊', commentPic: '', commentVideo: '' },
    { commentUserName: '小圆', commentUserAva: './1.png', commentText: '欢迎', commentPic: '', commentVideo: '' },
    { commentUserName: '熊妈', commentUserAva: './1.png', commentText: '', commentPic: 'https://cdn.pixabay.com/photo/2023/05/21/10/03/flower-8008187_1280.jpg', commentVideo: '' }
    ]
}
]

function CommentCard(props) {
    const commentUserName = props.postComment.commentUserName;
    const commentText = props.postComment.commentText;
    const commentPic = props.postComment.commentPic;

    return <div className='oneComment'>
        <span style={{ fontSize: 16, color: '#5134AB', verticalAlign: 'top' }}>{commentUserName}: </span>
        {commentText !== '' ? <span className='commentText' style={{ fontSize: 16 }}>{commentText}</span> : <></>}
        {commentPic !== '' ? <img width='30%' alt='' style={{ verticalAlign: 'top', marginTop: '3%' }} src={commentPic} /> : <></>}
    </div>
}

function PostCard(props) {
    const username = props.username;
    const ava = props.ava;
    const postText = props.postText;
    const postPhoto = props.postPhoto;
    const postComment = props.postComment;
    return <div className='PostCard'>
        <div className="ava"><img className="avaImg" alt="ava" src={ava} /></div>
        <div className='postCardContent'>
            <div className='username' style={{ fontSize: 18, fontWeight: 'bolder', color: '#5134AB' }}>{username}</div>

            <div className='Text' style={{ fontSize: 18, marginTop: '3%' }}>{postText}</div>
            <div className='Photo'>
                {postPhoto.map(item => { return <div style={{ width: '30%', marginTop: '5%',marginRight:'3%' }}><Image height='100%' width='100%' src={item} /></div> })}
            </div>
            <div className='Comment'>{postComment.map(item => {
                return <CommentCard postComment={item} />
            })}</div>

        </div>
    </div>
}

function Browse() {
    const location = useLocation();
    const user_id = location.state.user_id;
    const position = location.state.position;
    const [post,setPost] = useState([]);
    const getPostInBound= async ()=>{
        const res= await getPost(position);
        res.map((item)=>{
            getUsernameAndAva(item.user_id).then((callback)=>{
                item.username=callback.username;
                item.ava=callback.avatar_url;
            });
            getPostImage(item.post_id).then((callback)=>{
                item.postPhoto=callback;
            })
        })
        debugger
        console.log(res);
        setPost(res);
    }
    useEffect(()=>{
        getPostInBound();
    },[]);
    const navigate = useNavigate();
    return <div className='browse'>
        <div className='headBar'>
            <div className='backIcon' onClick={() => { navigate('../home', { state: { user_id: user_id, position: position } }) }}><LeftOutlined style={{ fontSize: 20 }} /></div>
        </div>
        {postdata.map(item => {
            return <div>
                <div >
                    <PostCard ava={item.ava} username={item.username} postText={item.postText} postPhoto={item.postPhoto} postComment={item.postComment} />
                </div>
                <Divider />
            </div>
        })}
    </div>
}

export default Browse;

