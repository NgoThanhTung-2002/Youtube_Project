import { Input } from 'antd'
import React from 'react'

const ButtonInputSearch = () => {
  return (
    <div>
        <Input placeholder="Basic usage" />;
        <Button size={size} icon={<SearchOutlined />}>Default</Button>
    </div>
  )
}

export default ButtonInputSearch