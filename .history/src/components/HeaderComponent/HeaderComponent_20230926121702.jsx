import { Col } from "antd";
import React from "react";
import { WrapperHeader, WrapperTextHeader } from "./style";
import Search from "antd/es/input/Search";
import {
    UserOutlined,
    CaretDownOutlined,
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
            <div>
                <UserOutlined />
                <div>
                    <p>Đăng nhập/Đăng ký</p>
                    <span>Tài khoản</span>
                    <CaretDownOutlined />
                </div>

            </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
