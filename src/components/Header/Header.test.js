import React from 'react'
import { shallow } from 'enzyme'
import { Header, Button } from 'components'

describe('Header', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Header
        isRandomRating
        startRandomRating={jest.fn()}
        stopRandomRating={jest.fn()}
        onResetRatings={jest.fn()}
      />,
    )
  })

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render one HeaderContainer element', () => {
    expect(wrapper.find('HeaderContainer').length).toEqual(1)
  })

  it('should render one HeaderTitle element with the title', () => {
    expect(wrapper.find('HeaderTitle').length).toEqual(1)
    expect(wrapper.find('HeaderTitle').children().text()).toEqual(
      'Top 10 colors',
    )
  })

  it('should render one div element', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })

  it('should render two instance of Button component', () => {
    expect(wrapper.find(Button).length).toEqual(2)
  })

  it('should render one instance of Button component with prop `text` equal to stop if isRandomRating true', () => {
    expect(wrapper.find(Button).at(0).prop('text')).toEqual('stop rating')
  })

  it('should render one instance of Button component with prop `text` equal to `random rate` if isRandomRating false', () => {
    wrapper.setProps({ isRandomRating: false })
    expect(wrapper.find(Button).at(0).prop('text')).toEqual('random rate')
  })

  it('should render one instance of Button component with prop `text` equal to `reset ratings`', () => {
    expect(wrapper.find(Button).at(1).prop('text')).toEqual('reset ratings')
  })
})
