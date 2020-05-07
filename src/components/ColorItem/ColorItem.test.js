import React from 'react'
import { shallow } from 'enzyme'
import { ColorItem, Rating } from 'components'

describe('ColorItem', () => {
  let wrapper

  const mockColor = {
    id: 'fc352593-c91d-4cf6-b689-7478ee2b61c8',
    name: 'orange',
    hex: '#FFA500',
    rgb: 'rgb(255, 165, 0)',
    rating: 3,
  }

  beforeEach(() => {
    wrapper = shallow(
      <ColorItem
        id={mockColor.id}
        name={mockColor.name}
        hex={mockColor.hex}
        rgb={mockColor.rgb}
        rating={mockColor.rating}
        onRate={jest.fn()}
      />,
    )
  })

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render one Card element', () => {
    expect(wrapper.find('Card').length).toEqual(1)
  })

  it('should render one Preview element with prop `hex`', () => {
    expect(wrapper.find('Preview').length).toEqual(1)
    expect(wrapper.find('Preview').prop('hex')).toBeTruthy()
    expect(wrapper.find('Preview').prop('hex')).toEqual('#FFA500')
  })

  it('should render one Title element with the color name as title', () => {
    expect(wrapper.find('Title').length).toEqual(1)
    expect(wrapper.find('Title').children().text()).toEqual('orange')
  })

  it('should render two Text elements with the color hex and rgb respectively', () => {
    expect(wrapper.find('Text').length).toEqual(2)
    expect(wrapper.find('Text').children().at(0).text()).toEqual('#FFA500')
    expect(wrapper.find('Text').children().at(1).text()).toEqual(
      'rgb(255, 165, 0)',
    )
  })

  it('should render one instance of Rating component', () => {
    expect(wrapper.find(Rating).length).toEqual(1)
  })
})
