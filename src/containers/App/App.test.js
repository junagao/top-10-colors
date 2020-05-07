import React from 'react'
import { mount } from 'enzyme'
import { Header, ColorList } from 'components'
import { App } from './App'

describe('App', () => {
  let wrapper

  const mockColors = [
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
    wrapper = mount(
      <App
        colors={mockColors}
        getColors={jest.fn()}
        rateColor={jest.fn()}
        isRandomRating
        toggleRandomRating={jest.fn()}
        randomRateColor={jest.fn()}
        resetRatings={jest.fn()}
      />,
    )
  })

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders one AppContainer element', () => {
    expect(wrapper.find('AppContainer').length).toEqual(1)
  })

  it('shows one instance of Header', () => {
    expect(wrapper.find(Header).length).toEqual(1)
  })

  it('shows one instance of ColorList', () => {
    expect(wrapper.find(ColorList).length).toEqual(1)
  })

  it('calls the resetRatings function when the reset button is clicked', () => {
    const spy = jest.spyOn(wrapper.instance().props, 'resetRatings')
    wrapper.find('ButtonStyled').at(1).simulate('click')
    expect(spy).toHaveBeenCalled()
  })

  it('calls the rateColor function when the star icon is clicked', () => {
    const spy = jest.spyOn(wrapper.instance().props, 'rateColor')
    wrapper.find('StarIcon').at(1).simulate('click')
    expect(spy).toHaveBeenCalled()
  })

  it('calls the toggleRandomRating functions when the random rate button is clicked', () => {
    const spy = jest.spyOn(wrapper.instance().props, 'toggleRandomRating')
    wrapper.find('ButtonStyled').at(0).simulate('click')
    expect(spy).toHaveBeenCalled()
  })
})
