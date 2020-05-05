import styled from '@emotion/styled'
import theme from 'theme'

const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, 12rem);
  grid-gap: ${theme.space[4]};
  grid-row-gap: ${theme.space[5]};
  justify-content: space-between;
`
export default List
