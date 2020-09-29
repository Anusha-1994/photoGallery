/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import {
    Modal,
    Form,
    Input
} from 'antd';
import { FormInstance } from 'antd/lib/form';
import Constant from '../../../Global/Constant';



type imageData = {
    title: string;
    description: string;
    author: string;
    src: string;
}
interface Props {
    form: FormInstance,
    modalVisible: boolean,
    editMode: boolean,
    onCancel?: () => void,
    onSave?: ((machine: any) => void),
    confirmLoading: boolean,
    imageData: imageData
}

function DashboardModal(props: Props) {
    const {
        form, modalVisible, editMode, onCancel, onSave, confirmLoading, imageData
    } = props;

    return (
        <Modal
            title="Update"
            visible={modalVisible}
            onOk={() => form.submit()}
            onCancel={onCancel}
            okText="Update"
            confirmLoading={confirmLoading}
            cancelButtonProps={{ disabled: confirmLoading }}

        >
            <Form
                form={form}
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                labelAlign="left"
                colon={false}
                onFinish={onSave}
            >
                <Form.Item

                    className="mb-2"
                    label="Title"
                    name="title"
                    required
                    rules={[
                        {
                            required: true,
                            message: Constant.titleRequiredError,
                        },
                    ]}
                >
                    <Input className="input-style" placeholder="Enter image title" />
                </Form.Item>
                <Form.Item
                    className="mb-2"
                    label="Author"
                    name="author"
                    required
                    rules={[
                        {
                            required: true,
                            message: Constant.autherNameRequiredError,
                        },
                    ]}
                >
                    <Input className="input-style" placeholder="Enter author name" />
                </Form.Item>
                <Form.Item
                    className="mb-2"
                    label="Description"
                    name="description"
                    required
                    rules={[
                        {
                            required: true,
                            message: Constant.descriptionRequiredError,
                        },
                    ]}
                >
                    <Input className="input-style" placeholder="Enter description" />
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default observer(DashboardModal);
