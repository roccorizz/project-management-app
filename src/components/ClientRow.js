import { Button, Popconfirm, message } from 'antd';
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/ClientQueries';

export default function ClientRow({ client }) {
    const [deleteClient] = useMutation(DELETE_CLIENT, {
        variables: { id: client.id },
        refetchQueries: [{ query: GET_CLIENTS }],
        onError: (error) => {
            message.error(error.message);
        },
    });

    const handleDelete = () => {
        deleteClient();
        message.success(`${client.name} has been deleted`);
    };

    return (
        <div>
            <Popconfirm
                title={`Are you sure you want to delete ${client.name}?`}
                onConfirm={handleDelete}
                okText='Yes'
                cancelText='No'
            >
                <Button type='primary' danger>
                    Delete
                </Button>
            </Popconfirm>
        </div>
    );
}
