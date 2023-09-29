import { Col } from "antd";
import React from "react";
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader } from "./style";
import Search from "antd/es/input/Search";
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined,
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
            <WrapperHeaderAccount>
                <UserOutlined style={{ fontSize: '30px'}}/>
                <div>
                    <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                    <span>Tài khoản</span>
                    <CaretDownOutlined />
                </div>
            </WrapperHeaderAccount>
            <div>
                <ShoppingCartOutlined />
                <span>Giỏ hàng</span>
            </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
