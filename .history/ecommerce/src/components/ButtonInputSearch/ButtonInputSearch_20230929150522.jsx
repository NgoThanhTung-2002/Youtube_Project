import { Button, Input } from 'antd'
import React from 'react'
import {SearchOutlined} from '@ant-design/icons'

const ButtonInputSearch = (this.props.first) => {
  return (
    <div>
        <Input size='large' placeholder="Basic usage" />
        <Button size='large' icon={<SearchOutlined />}>Default</Button>
    </div>
  )
}

export default ButtonInputSearch