import { Col, Row } from "antd";
import React from "react";

const HeaderComponent = () => {
  return (
    <div>
      <Row>
        <Col span={}>col-8</Col>
        <Col span={8}>col-8</Col>
        <Col span={8}>
          col-8
        </Col>
      </Row>
    </div>
  );
};

export default HeaderComponent;
