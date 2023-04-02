import { useQuery } from '@apollo/client';
import { Table } from 'antd';
import { gql } from "@apollo/client";
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

];



const GET_CLIENTS = gql`
query getClients{
    clients{
        id
        name
        email
        phone
    }
}
`;

export default function Clients() {
    const { loading, error, data } = useQuery(GET_CLIENTS);

    if (loading) return <h3>Loading...</h3>;
    if (error) return <p>Something Went Wrong</p>;

    const clients = data.clients.map((client) => ({
        ...client,
        key: client.id,
    }));

    return (
        <>
            <h3>Clients List</h3>
            {!loading && !error && (
                <Table columns={columns}
                    loading={loading}
                    dataSource={clients}
                    pagination={false} />
            )}
        </>
    );
}
