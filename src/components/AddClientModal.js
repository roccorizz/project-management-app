import { useState } from 'react';
import { Button, Input, Modal, Form } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useMutation } from '@apollo/client';
import { ADD_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/ClientQueries';

export default function AddClientModal() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [form] = Form.useForm();

    const [addClient] = useMutation(ADD_CLIENT, {
        update(cache, { data: { addClient } }) {
            const { clients } = cache.readQuery({ query: GET_CLIENTS });

            cache.writeQuery({
                query: GET_CLIENTS,
                data: { clients: [...clients, addClient] },
            });
        },
    });

    const onFinish = ({ name, email, phone }) => {
        addClient({ variables: { name, email, phone } });
        setIsModalVisible(false);
        form.resetFields();
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
    };

    return (
        <>
            <Button type='primary' onClick={() => setIsModalVisible(true)}>
                <UserOutlined />
                Add Client
            </Button>
            <Modal
                title='Add Client'
                open={isModalVisible}
                onCancel={handleCancel}
                footer={[
                    <Button key='cancel' onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key='submit' type='primary' onClick={form.submit}>
                        Submit
                    </Button>,
                ]}
            >
                <Form form={form} onFinish={onFinish}>
                    <Form.Item
                        name='name'
                        rules={[{ required: true, message: 'Please enter the client name' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder='Name' />
                    </Form.Item>
                    <Form.Item
                        name='email'
                        rules={[{ required: true, message: 'Please enter the client email' }]}
                    >
                        <Input type='email' prefix={<UserOutlined />} placeholder='Email' />
                    </Form.Item>
                    <Form.Item
                        name='phone'
                        rules={[{ required: true, message: 'Please enter the client phone number' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder='Phone' />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}
