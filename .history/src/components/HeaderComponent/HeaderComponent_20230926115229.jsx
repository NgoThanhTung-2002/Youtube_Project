import { Col} from "antd";
import React from "react";

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>col-8</Col>
        <Col span={12}>col-8</Col>
        <Col span={6}>
          col-8
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;