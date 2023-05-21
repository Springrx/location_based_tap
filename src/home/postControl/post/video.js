import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import { HOST } from '../../../component/fetch';

const props = {
    action:HOST+'/uploadImg',
  listType: 'picture-card',
  async previewFile(file) {
    console.log('Your upload file:', file);
    // Your process logic. Here we just mock to the same file
    return fetch(HOST+'/getVideo')
      .then((res) =>{debugger; res.json()})
      .then(() => {return  <video width="500" height="500" controls autoplay>
      <source src="C:/Users/kangc/location-files/d6f2a450-0a7e-4fb6-a040-70b00b0c4139.mp4" type="video/ogg" /> </video>});
  },
};
const Video = () => (
    <div>
    <div style={{marginLeft:100}}>
  <Upload {...props} >
    <Button icon={<UploadOutlined />}>Upload</Button>
  </Upload>
  </div>
  <div>
  <video width="200" height="200" src="https://player.vimeo.com/progressive_redirect/playback/796129612/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=d3e242a868aff7700659371c3d511683ab9bce7a0a8c30d3293a498ecdf800f2" controls autoplay>
   </video>
</div>
</div>
  );
export default Video;

