import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 70,
            marginTop: '150px',
            color: 'tomato',

        }}
        spin
    />
);
const Spinner = () => <Spin indicator={antIcon}>Loading...</Spin>;
export default Spinner;