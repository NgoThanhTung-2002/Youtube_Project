import { Button, Input } from 'antd'
import React from 'react'
import {SearchOutlined} from '@ant-design/icons'

const ButtonInputSearch = (this.props.first) => {
  const {size, placeholder } = props
  return (
    <div>
        <Input size=' placeholder="Basic usage" />
        <Button size=' icon={<SearchOutlined />}>Default</Button>
    </div>
  )
}

export default ButtonInputSearch