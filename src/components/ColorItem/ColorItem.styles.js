import styled from '@emotion/styled'
import theme from 'theme'

export const Card = styled.div`
  border-radius: ${theme.radii.base};
  border: ${theme.borders.thin} ${theme.colors.light};
  transition: box-shadow 0.2s;
  :hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.025),
      0 4px 6px -3px rgba(0, 0, 0, 0.05);
  }
`

export const Preview = styled.div`
  height: 10rem;
  background-color: ${({ hex }) => hex};
  border-radius: ${theme.radii.baseAdjusted} ${theme.radii.baseAdjusted}
    ${theme.radii.none} ${theme.radii.none};
`

export const Title = styled.h2`
  color: ${theme.colors.secondary};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.md};
  padding: ${theme.space[3]} ${theme.space[3]};
`

export const Text = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.text};
  padding: ${theme.space[0]} ${theme.space[3]};
  :last-child {
    margin-bottom: ${theme.space[3]};
  }
`
