import React from 'react'
import { bool, func } from 'prop-types'
import { Button } from 'components'
import { HeaderContainer, HeaderTitle } from './Header.styles'

const Header = ({ isRandomRating, startRandomRating, stopRandomRating }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>Top 10 favorite colors</HeaderTitle>
      <Button
        isRandomRating={isRandomRating}
        startRandomRating={startRandomRating}
        stopRandomRating={stopRandomRating}
      />
    </HeaderContainer>
  )
}

Header.propTypes = {
  isRandomRating: bool.isRequired,
  startRandomRating: func.isRequired,
  stopRandomRating: func.isRequired,
}

export default Header
