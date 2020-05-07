import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('Button', () => {
  let wrapper
  const mockText = 'Rate'
  const onClickMock = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <Button text={mockText} reset={false} onClick={onClickMock} />,
    )
  })

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render one ButtonStyled element of type `button` with prop `reset`', () => {
    expect(wrapper.find('ButtonStyled').length).toEqual(1)
    expect(wrapper.find('ButtonStyled').prop('type')).toEqual('button')
    expect(wrapper.find('ButtonStyled').prop('reset')).toBeFalsy()
    wrapper.setProps({ reset: true })
    expect(wrapper.find('ButtonStyled').prop('reset')).toBeTruthy()
  })

  it('should render the button text', () => {
    expect(wrapper.find('ButtonStyled').children().text()).toEqual('Rate')
  })

  it('should test click event on button and call onClick one time', () => {
    wrapper.find('ButtonStyled').simulate('click')
    expect(onClickMock.mock.calls.length).toEqual(1)
  })
})
