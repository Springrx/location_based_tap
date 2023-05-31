import { PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import { HOST } from '../../../component/fetch';
import { useState } from 'react';
import './post.css'
const uploadButton = (
  <div>
    <PlusOutlined />
    <div
      style={{
        marginTop: 8,
      }}
    >
      Video
    </div>
  </div>
);

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
function Video(props) {
  const getVideoUrl = props.getVideoUrl;
  const [preview, setPreview] = useState('');
  async function previewFile(file) {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file);
    }
    setPreview(file.url || file.preview);
    getVideoUrl(file.url);
  }
  return <div>
    <div className='video'>
      {preview === '' ?
        <Upload   
        action= {HOST + '/uploadImg'}
        listType= 'picture-card'
        previewFile={previewFile} >
          {uploadButton}
        </Upload> : <video width="40%" controls autoplay>
          <source src={preview} type="video/ogg" /> </video>
      }



      {/* <Upload {...props} previewFile={previewFile} >
  {uploadButton}
  </Upload>
  <div>
  {preview===''?<></>:<video width="40%"  controls autoplay>
    <source src={preview} type="video/ogg" /> </video>}
  </div> */}
    </div>
    <div>
    </div>
  </div>
}
export default Video;

