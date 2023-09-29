import { Button, Input } from 'antd'
import React from 'react'
import {SearchOutlined} from '@ant-design/icons'

const ButtonInputSearch = (this.props.first) => {
  const {size, placeholder, text } = props
  return (
    <div>
        <Input size={size} placeholder={placeholder} />
        <Button size={size} icon={<SearchOutlined />}>Default</Button>
    </div>
  )
}

export default ButtonInputSearch