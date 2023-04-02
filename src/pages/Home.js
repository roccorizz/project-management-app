import { Col, Row } from 'antd';
import React from 'react';
import Clients from '../components/Clients'

export default function Home() {
    return (
        <>

            <Row justify="center" gutter={[16, 16]} style={{ marginBottom: '2rem', marginTop: '8rem' }}>
                <Col xs={24} md={12}>
                    <Clients />
                </Col>
            </Row>



        </>
    );
}
