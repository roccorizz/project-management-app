import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Button, Card } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import Spinner from '../components/Spinner';
import ClientInfo from '../components/ClientInfo';
import DeleteProjectButton from '../components/DeleteProjectButton';
import EditProjectForm from '../components/EditProjectForm';
import { GET_PROJECT } from '../queries/ProjectQueries';


export default function Project() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });




    if (loading) return <Spinner />;
    if (error) return <p>Something Went Wrong</p>;

    return (
        <>
            {!loading && !error && (
                <Card style={{ margin: '5px 20px', backgroundColor: 'whitesmoke' }}>
                    <Link to="/">
                        <Button icon={<ArrowLeftOutlined />} type="text">
                            Back
                        </Button>
                    </Link>

                    <h1 style={{ marginTop: '60px', fontSize: '30px' }}>{data.project.name}</h1>
                    <p style={{ color: 'grey', fontSize: '20px' }}>{data.project.description}</p>

                    <h3 style={{ marginTop: '20px', fontSize: '20px' }}>Project Status</h3>
                    <p style={{ color: 'blue', fontWeight: 'bold', fontSize: '18px' }}>{data.project.status}</p>

                    <ClientInfo client={data.project.client} />

                    <EditProjectForm project={data.project} />

                    <DeleteProjectButton projectId={data.project.id} />
                </Card>
            )}
        </>
    );
}
