import React from 'react'
import { shallow } from 'enzyme'
import { Rating, Star } from 'components'

describe('Rating', () => {
  let wrapper

  const colorMock = {
    id: 'fc352593-c91d-4cf6-b689-7478ee2b61c8',
    name: 'orange',
    hex: '#FFA500',
    rgb: 'rgb(255, 165, 0)',
    rating: 3,
  }

  beforeEach(() => {
    wrapper = shallow(
      <Rating
        id={colorMock.id}
        rating={colorMock.rating}
        totalStars={10}
        onRate={jest.fn()}
      />,
    )
  })

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render one RatingContainer element', () => {
    expect(wrapper.find('RatingContainer').length).toEqual(1)
  })

  it('should render ten instances of Star component', () => {
    expect(wrapper.find(Star).length).toEqual(10)
  })
})
