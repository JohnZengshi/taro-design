import React from 'react'
import Taro from '@tarojs/taro'
import { Text } from '@tarojs/components'
import classNames from 'classnames'
import './icon.scss'

import { icons } from '../../render'

export default ({ font = 'icon', name, style, className, color, size = 32, onClick }) => {
  if (typeof name === 'object') {
    font = name[0]
    name = name[1]
  }
  if (!icons[font]) {
    console.warn(font + ' 图标库未定义')
    return null
  }
  if (!icons[font].list?.[name]) {
    console.warn(font + ' 图标库下的 ' + name + ' 图标未定义')
    return null
  }

  return <Text
    onClick={onClick}
    style={{ color, fontSize: Taro.pxTransform(size), ...style }}
    className={classNames(font, icons[font].prefix + name, className)}
  />
}
