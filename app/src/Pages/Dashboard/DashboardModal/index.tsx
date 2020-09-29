import React from 'react';
import { observer } from 'mobx-react';

import {
    Modal,
    Image,
    Typography
} from 'antd';
import { FormInstance } from 'antd/lib/form';

type imageData = {
    title: string;
    description: string;
    author: string;
    src: string;
}
interface Props {
    form: FormInstance,
    modalVisible: boolean,
    onCancel?: () => void,
    confirmLoading: boolean,
    imageData: imageData
}

function DashboardModal(props: Props) {
    const {
        form, modalVisible, onCancel, confirmLoading, imageData
    } = props;

    return (
        <Modal
            title={imageData.title}
            visible={modalVisible}
            onOk={() => form.submit()}
            onCancel={onCancel}
            okText="Update"
            confirmLoading={confirmLoading}
            cancelButtonProps={{ disabled: confirmLoading }}

        >
            <div className="p-4 w-100 bg-white rounded mb-4">
                <Image preview={false} src={imageData.src} width={400}/>
                <div>
                    <h4>{imageData.description}</h4>
                    <h5>{imageData.author}</h5>
                </div> 
            </div>
        </Modal>
    );
}

export default observer(DashboardModal);
