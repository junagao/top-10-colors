import React from 'react'
import { colors } from 'data/data.json'
import { ColorItem } from 'components'
import List from './ColorList.styles'

const ColorList = () => (
  <List>
    {colors.map(({ id, name, hex, rgb }) => (
      <li key={id}>
        <ColorItem name={name} hex={hex} rgb={rgb} />
      </li>
    ))}
  </List>
)

export default ColorList
