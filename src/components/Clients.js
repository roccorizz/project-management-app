import { useQuery } from '@apollo/client';
import { Table } from 'antd';
import Spinner from './Spinner';
import AddClientModal from './AddClientModal';
import { GET_CLIENTS } from '../queries/ClientQueries';
import ClientRow from './ClientRow';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, client) => <ClientRow client={client} />,
    },

];

export default function Clients() {
    const { loading, error, data } = useQuery(GET_CLIENTS);

    if (loading) return <Spinner />;
    if (error) return <p>Something Went Wrong</p>;

    const clients = data.clients.map((client) => ({
        ...client,
        key: client.id,
    }));

    return (
        <>
            <AddClientModal />
            {!loading && !error && (
                <div className="table-wrapper custom-table">

                    <Table columns={columns}
                        loading={loading}
                        dataSource={clients}
                        pagination={false} />
                </div>
            )}
        </>
    );
}
