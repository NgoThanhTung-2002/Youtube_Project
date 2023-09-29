import { Col } from "antd";
import React from "react";
import { WrapperHeader, WrapperTextHeader } from "./style";
import Search from "antd/es/input/Search";
import {
    import {
        HomeOutlined,
        LoadingOutlined,
        SettingFilled,
        SmileOutlined,
        SyncOutlined,
      } from '@ant-design/icons';
  } from '@ant-design/icons';

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
        <Col span={6}>
        <UserOutlined />
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
