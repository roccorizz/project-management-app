import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_PROJECT } from '../mutations/projectMutations';
import { GET_PROJECTS } from '../queries/ProjectQueries';
import { GET_CLIENTS } from '../queries/ClientQueries';
import { Modal, Form, Input, Select, Button } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import Spinner from './Spinner';

const { Option } = Select;

export default function AddProjectModal() {
    const [form] = Form.useForm();
    const [visible, setVisible] = useState(false);

    const [addProject] = useMutation(ADD_PROJECT, {
        update(cache, { data: { addProject } }) {
            const { projects } = cache.readQuery({ query: GET_PROJECTS });
            cache.writeQuery({
                query: GET_PROJECTS,
                data: { projects: [...projects, addProject] },
            });
        },
    });

    // Get Clients for select
    const { loading, error, data } = useQuery(GET_CLIENTS);

    const handleCancel = () => {
        setVisible(false);
        form.resetFields();
    };

    const handleOk = () => {
        form.validateFields().then((values) => {
            addProject({
                variables: {
                    name: values.name,
                    description: values.description,
                    clientId: values.clientId,
                    status: values.status,

                },
            });
            setVisible(false);
            form.resetFields();
        });
    };

    if (loading) return <Spinner />;
    if (error) return 'Something Went Wrong';

    return (
        <>
            <Button
                type='primary'
                onClick={() => setVisible(true)}
                icon={<UnorderedListOutlined className='icon' />}
            >
                New Project
            </Button>

            <Modal
                title='New Project'
                open={visible}
                onCancel={handleCancel}
                onOk={handleOk}
                confirmLoading={false}
            >
                <Form form={form} layout='vertical'>
                    <Form.Item
                        label='Name'
                        name='name'
                        rules={[{ required: true, message: 'Please enter a name' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label='Description'
                        name='description'
                        rules={[
                            { required: true, message: 'Please enter a description' },
                        ]}
                    >
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item
                        label='Status'
                        name='status'
                        initialValue='new'
                        rules={[{ required: true, message: 'Please select a status' }]}
                    >
                        <Select>
                            <Option value='new'>Not Started</Option>
                            <Option value='progress'>In Progress</Option>
                            <Option value='completed'>Completed</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label='Client'
                        name='clientId'
                        initialValue='Select Client'
                        rules={[{ required: true, message: 'Please select a client' }]}
                    >
                        <Select>

                            {data.clients.map((client) => (
                                <Option key={client.id} value={client.id}>
                                    {client.name}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}
