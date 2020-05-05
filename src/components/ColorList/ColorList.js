import React from 'react'
import { colors } from 'data/data.json'
import { ColorItem } from 'components'

const ColorList = () => (
  <ul>
    {colors.map(({ id, name, hex, rgb }) => (
      <li key={id}>
        <ColorItem id={id} name={name} hex={hex} rgb={rgb} />
      </li>
    ))}
  </ul>
)

export default ColorList
