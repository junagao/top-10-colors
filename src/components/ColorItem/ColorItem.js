import React from 'react'
import PropTypes from 'prop-types'
import { Card, Preview, Title, Text } from './ColorItem.styles'

const ColorItem = ({ name, hex, rgb }) => (
  <Card>
    <Preview hex={hex} />
    <Title>{name}</Title>
    <Text>{hex}</Text>
    <Text>{rgb}</Text>
  </Card>
)

ColorItem.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  rgb: PropTypes.string.isRequired,
}

export default ColorItem
