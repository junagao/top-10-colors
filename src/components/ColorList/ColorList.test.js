import React from 'react'
import { shallow } from 'enzyme'
import { ColorList, ColorItem } from 'components'

describe('ColorList', () => {
  let wrapper

  const colorsMock = [
    {
      id: 'fc352593-c91d-4cf6-b689-7478ee2b61c8',
      name: 'orange',
      hex: '#FFA500',
      rgb: 'rgb(255, 165, 0)',
      rating: 3,
    },
    {
      id: 'b0e3fab2-0477-4e28-b2e0-c2281a21d09b',
      name: 'purple',
      hex: '#800080',
      rgb: 'RGB(128, 0, 128)',
      rating: 5,
    },
  ]

  beforeEach(() => {
    wrapper = shallow(<ColorList colors={colorsMock} onRate={jest.fn()} />)
  })

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render one List element', () => {
    expect(wrapper.find('List').length).toEqual(1)
  })

  it('should render two li elements', () => {
    expect(wrapper.find('li').length).toEqual(2)
  })

  it('should render two instance of ColorItem components', () => {
    expect(wrapper.find(ColorItem).length).toEqual(2)
  })
})
