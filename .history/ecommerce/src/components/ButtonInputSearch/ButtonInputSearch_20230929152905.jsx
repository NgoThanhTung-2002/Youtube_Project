import { Button, Input } from 'antd'
import React from 'react'
import {SearchOutlined} from '@ant-design/icons'

const ButtonInputSearch = (props) => {
  const {size, placeholder, textButton, bordered, backgroundColorInput=, backgroundColorButton} = props
  return (
    <div style={{ display: 'flex'}}>
        <Input 
            size={size} 
            placeholder={placeholder} 
            bordered={bordered} 
            style={{backgroundColor: backgroundColorInput}}
        />
        <Button 
            size={size} 
            bordered={bordered} 
            style={{backgroundColor: backgroundColorButton}} 
            icon={<SearchOutlined />}
        >{textButton}</Button>
    </div>
  )
}

export default ButtonInputSearch