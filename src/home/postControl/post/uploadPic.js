import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import { HOST } from '../../../component/fetch';
import { useState } from 'react';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const UploadPic = (props) => {
  const getImgList=props.getImgList;
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
//   const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([
    // {
    //   uid: '-1',
    //   name: 'image.png',
    //   status: 'done',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
  ]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    debugger;
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    
  };
  const handleChange = ({ fileList: newFileList }) => {setFileList(newFileList);getImgList(newFileList)};
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Photo
      </div>
    </div>
  );

  return (
    <div >
      <Upload
        action={HOST+'/uploadImg'}
        listType="picture-card"
        fileList={fileList}
        multiple={true}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 6 ? null : uploadButton}
      </Upload>

      <Modal open={previewOpen}  footer={null} onCancel={handleCancel}>
     <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>

    </div>
  );
};
export default UploadPic;