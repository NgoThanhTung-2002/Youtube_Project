import { Input } from 'antd'
import React from 'react'

const ButtonInputSearch = () => {
  return (
    <div>
        <Input placeholder="Basic usage" />;
        <Butto size={size} icon={<SearchOutlined />}>Default</Butto>
    </div>
  )
}

export default ButtonInputSearch