import React from 'react'
import { arrayOf, shape, string } from 'prop-types'
import { ColorItem } from 'components'
import List from './ColorList.styles'

const ColorList = ({ colors }) => (
  <List>
    {colors.map(({ id, name, hex, rgb }) => (
      <li key={id}>
        <ColorItem name={name} hex={hex} rgb={rgb} />
      </li>
    ))}
  </List>
)

ColorList.propTypes = {
  colors: arrayOf(
    shape({
      id: string,
      name: string,
      hex: string,
      rgb: string,
    }),
  ).isRequired,
}

export default ColorList
