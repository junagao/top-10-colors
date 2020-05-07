import styled from '@emotion/styled'
import { AiFillStar } from 'react-icons/ai'

const StarIcon = styled(AiFillStar)`
  cursor: pointer;
  transition: all 0.3s;
  height: 1.5rem;
  margin: 0 1px 0 1px;
  :hover {
    margin: 0;
  }
`

export default StarIcon
