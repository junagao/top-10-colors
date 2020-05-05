import React from 'react'
import PropTypes from 'prop-types'

const ColorItem = ({ name, hex, rgb }) => (
  <div>
    <div style={{ backgroundColor: hex }} />
    <h2>{name}</h2>
    <p rgb={rgb}>{hex}</p>
    <p>{rgb}</p>
  </div>
)

ColorItem.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  rgb: PropTypes.string.isRequired,
}

export default ColorItem
