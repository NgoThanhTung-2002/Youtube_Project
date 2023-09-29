import { Col } from "antd";
import React from "react";
import { WrapperHeader, WrapperTextHeader } from "./style";
import Search from "antd/es/input/Search";

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>NGOTUNG</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            // onSearch={onSearch}
          />
        </Col>
        <Col span={6}>col-8</Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
