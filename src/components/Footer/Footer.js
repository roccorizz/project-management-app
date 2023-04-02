import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';
import logo from '../assets/logo.png';

const { Footer } = Layout;

const CustomFooter = () => {
    return (
        <Footer style={{ textAlign: 'center' }} className='footer'>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                <MailOutlined style={{ fontSize: '20px', marginRight: '5px' }} />
                <a href="mailto:contact@company.com" style={{ color: '#fff' }}>project@example.com</a>
                <span style={{ margin: '0 10px' }}>|</span>
                <Link to="/blogs" style={{ color: '#fff', marginRight: '10px' }}>Blogs</Link>
                <span style={{ margin: '0 10px' }}>|</span>
                <Link to="/address" style={{ color: '#fff' }}>Address</Link>
            </div>
        </Footer>
    );
};

export default CustomFooter;
