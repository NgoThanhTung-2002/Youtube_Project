import { Button, Input } from 'antd'
import React from 'react'
import {SearchOutlined} from '@ant-design/icons'

const ButtonInputSearch = (this.props.first) => {
  const {size, placeholder, textButton } = props
  return (
    <div>
        <Input size={size} placeholder={placeholder} />
        <Button size={size} icon={<SearchOutlined />}>{t}</Button>
    </div>
  )
}

export default ButtonInputSearch