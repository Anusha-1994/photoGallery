import React, { useState, useEffect } from 'react';
import {
    Layout,
    Typography,
    Image,
    notification,
    Form
} from 'antd';
import { observer } from 'mobx-react';
import dashboardStore from '../../Store/dashboardStore'
import DetailsModal from './DetailsModal'
import './Details.less';
const images = require.context('../../Store/imageStore', true);
const imageData = {
    title: '',
    description: '',
    author: '',
    src: '',
    id: ''
}


function Details() {
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [editing, setEditing] = useState(false);
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

    const showImage = (image: any, imageSrc: any) => {
        const imageData: any = {
            title: image.title,
            description: image.description,
            author: image.author,
            src: imageSrc,
            id : image.id
        }
        form.setFieldsValue(imageData);
        setData(imageData)
        setVisible(true);
    }

    const displayImage = dashboardStore.gallery.map((gallery: any) => (
        <div className=" w-25 mb-4" onClick={() => showImage(gallery, images('./' + gallery.path) )} > 
            <Image className="mouse-over" preview={false} src={images('./' + gallery.path)} width={200} height={200}/>
            <div>{gallery.title}</div>
        </div>
    ));

    const updateData = () => {
        form.validateFields()
            .then((value) => {
                setLoading(true);
                const updatedData = { title: value.title, author: value.author, description: value.description, id: data.id }
                dashboardStore.updateDetails(updatedData, (err?: Error) => {
                    setLoading(false);
                    if (err) {
                        notification.error({
                            placement: 'topRight',
                            description: err.message,
                            message: 'Error',
                            duration: 0,
                        });
                    }
                    else {
                        setVisible(false);
                        getImages()                    
                    }
                })
            })
            .catch(() => { });     
    }
    return (
        <Layout.Content>
            <Typography.Title level={4} className="mb-4">
                Update Image Details
            </Typography.Title>
            <div className="p-4 w-100 bg-white rounded mb-4 row-column">
                {displayImage}
            </div >
            <DetailsModal
                form={form}
                modalVisible={visible}
                editMode={editing}
                onSave={updateData}
                onCancel={() => setVisible(false)}
                confirmLoading={loading}
                imageData={data}
            />
        </Layout.Content>
    );
}

export default observer(Details);
