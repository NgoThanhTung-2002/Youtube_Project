import { Button, Input } from 'antd'
import React from 'react'
import {SearchOutlined} from '@ant-design/icons'

const ButtonInputSearch = (props) => {
  const {size, placeholder, textButton } = props
  return (
    <div style={}>
        <Input size={size} placeholder={placeholder} />
        <Button size={size} icon={<SearchOutlined />}>{textButton}</Button>
    </div>
  )
}

export default ButtonInputSearch