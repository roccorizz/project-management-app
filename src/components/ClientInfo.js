import { MailOutlined, PhoneOutlined, IdcardOutlined } from '@ant-design/icons';

export default function ClientInfo({ client }) {
    return (
        <>
            <h5 className='' style={{ fontSize: '20px' }}>Client Information</h5>
            <ul className=''>
                <li className=''>
                    <IdcardOutlined className='icon' /> {client.name}
                </li>
                <li className=''>
                    <MailOutlined className='icon' /> {client.email}
                </li>
                <li className=''>
                    <PhoneOutlined className='icon' /> {client.phone}
                </li>
            </ul>
        </>
    );
}