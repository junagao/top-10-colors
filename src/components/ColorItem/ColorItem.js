import React from 'react'
import { string, func, number } from 'prop-types'
import { Rating } from 'components'
import { Card, Preview, Title, Text } from './ColorItem.styles'

const ColorItem = ({ id, name, hex, rgb, rating, onRate }) => (
  <Card>
    <Preview hex={hex} />
    <Title>{name}</Title>
    <Text>{hex}</Text>
    <Text>{rgb}</Text>
    <Rating id={id} rating={rating} totalStars={5} onRate={onRate} />
  </Card>
)

ColorItem.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  hex: string.isRequired,
  rgb: string.isRequired,
  rating: number.isRequired,
  onRate: func.isRequired,
}

export default ColorItem
