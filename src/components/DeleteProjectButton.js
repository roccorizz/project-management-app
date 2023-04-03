import { Button, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { DELETE_PROJECT } from '../mutations/projectMutations';
import { GET_PROJECTS } from '../queries/ProjectQueries';
import { useMutation } from '@apollo/client';

export default function DeleteProjectButton({ projectId }) {
    const navigate = useNavigate();

    const [deleteProject] = useMutation(DELETE_PROJECT, {
        variables: { id: projectId },
        onCompleted: () => {
            message.success('Project deleted successfully');
            navigate('/');
        },
        refetchQueries: [{ query: GET_PROJECTS }],
        onError: () => {
            message.error('Something went wrong while deleting the project');
        },
    });

    return (
        <div style={{ justifyContent: 'end', display: 'flex', marginTop: '10px', marginRight: '60px' }}>
            <Button type='primary' danger icon={<DeleteOutlined />} onClick={deleteProject}>
                Delete Project
            </Button>
        </div>
    );
}
