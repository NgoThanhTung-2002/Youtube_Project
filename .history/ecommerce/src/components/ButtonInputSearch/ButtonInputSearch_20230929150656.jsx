import { Button, Input } from 'antd'
import React from 'react'
import {SearchOutlined} from '@ant-design/icons'

const ButtonInputSearch = (this.props.first) => {
  const {size, placeholder } = props
  return (
    <div>
        <Button size='large' icon={<SearchOutlined />}>Default</Button>
        <Input size='large' placeholder="Basic usage" />
    </div>
  )
}

export default ButtonInputSearch