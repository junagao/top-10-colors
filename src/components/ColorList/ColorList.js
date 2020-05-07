import React from 'react'
import { arrayOf, shape, string, number, func } from 'prop-types'
import { ColorItem } from 'components'
import List from './ColorList.styles'

const ColorList = ({ colors, onRate }) => (
  <List>
    {colors.map(({ id, name, hex, rgb, rating }) => (
      <li key={id}>
        <ColorItem
          id={id}
          name={name}
          hex={hex}
          rgb={rgb}
          rating={rating}
          onRate={onRate}
        />
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
      rating: number,
    }),
  ).isRequired,
  onRate: func.isRequired,
}

export default ColorList
