import React from 'react'
import { bool, func } from 'prop-types'
import { Button } from 'components'
import { HeaderContainer, HeaderTitle } from './Header.styles'

const Header = ({
  isRandomRating,
  startRandomRating,
  stopRandomRating,
  onResetRatings,
}) => {
  return (
    <HeaderContainer>
      <HeaderTitle>Top 10 colors</HeaderTitle>
      <div>
        {isRandomRating ? (
          <Button text="stop rating" onClick={stopRandomRating} />
        ) : (
          <Button text="random rate" onClick={startRandomRating} />
        )}
        <Button text="reset ratings" reset onClick={onResetRatings} />
      </div>
    </HeaderContainer>
  )
}

Header.propTypes = {
  isRandomRating: bool.isRequired,
  startRandomRating: func.isRequired,
  stopRandomRating: func.isRequired,
  onResetRatings: func.isRequired,
}

export default Header
