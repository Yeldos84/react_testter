import React from "react";
import { Col, Divider, Flex, Row, Button} from 'antd';

const style = { padding: '8px 0' };
const styleHr = { 
  margin: "20px 0",
	padding: "0",
	height: "1px",
	border: "none",
	borderTop: "1px solid #333",
	borderBottom:" 1px solid #333", };

export const Footer = () => {
  return (
    <>
      <hr style={styleHr} />
      <Row justify="center" align="middle ">
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}> 
        <div style={{ color: '#000', fontSize: '24px', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => navigate('/')}>
        Testter.kz
      
      </div>
      <p>Testter.kz ©2025</p>
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <div style={style}>
            <p>Call-центр:</p>
            <h3>+7 705 837 02 03</h3>
            <p>info@testter.kz</p>
          </div>
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <div style={style}>
          <Flex vertical gap="small" style={{ width: '100%' }}>
          <Button className="" block>Позвонить</Button>
          <Button block>Написать в WhatsApp</Button>
          </Flex>
          </div>
        </Col>
      </Row>
      
    </>

  );
};



