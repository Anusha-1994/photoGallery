import React, { useState, useEffect } from 'react';
import {
  Layout,
  Typography,
  Image,
  notification,
  Form,
  Card
  

} from 'antd';
import './Dashboard.less';
import { observer } from 'mobx-react';
import dashboardStore from '../../Store/dashboardStore'
import DashboardModal from './DashboardModal'

const images    = require.context('../../Store/imageStore', true);
const imageData = {
  title: '',
  description: '',
  author: '',
  src: ''
}


function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [data, setData] = useState(imageData)
  const getImages = () => {
    setLoading(true);
    dashboardStore.getGallery((err?: Error) => {
      setLoading(false);
      if (err) {
        notification.error({
          placement: 'topRight',
          description: err.message,
          message: 'Error',
          duration: 0,
        });
      }
    })
  }
  useEffect(() => {
    getImages();
  }, []);


  const displayImage = dashboardStore.gallery.map((gallery: any) => (
    <div className="w-25 mb-4 image-div"> 
      <div className="title-style">{gallery.title}</div> 
        <Image preview={false} src={images('./' + gallery.path)} width={300} height={300}/>
        <p className="desc-style">{gallery.description}</p>
        <p className="author-style">{gallery.author}</p>
    </div>
 
  ));

  return (
    <Layout.Content>
      <Typography.Title level={4} className="mb-4">
        Image Gallery
      </Typography.Title>
      <div className="p-4 w-100 bg-white rounded mb-4 row-column"> 
        {displayImage} 
      </div >
      <DashboardModal
        form={form}
        modalVisible={visible}
        onCancel={() => setVisible(false)}
        confirmLoading={loading}
        imageData={data} 
      />
    </Layout.Content>
  );
}

export default observer(Dashboard);
