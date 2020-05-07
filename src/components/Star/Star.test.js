import React from 'react'
import { shallow } from 'enzyme'
import Star from './Star'

describe('Star', () => {
  let wrapper

  const idMock = 'fc352593-c91d-4cf6-b689-7478ee2b61c8'
  const onRateMock = jest.fn()
  const indexMock = 4

  beforeEach(() => {
    wrapper = shallow(
      <Star id={idMock} index={indexMock} full onRate={onRateMock} />,
    )
  })

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render one StarIcon element', () => {
    expect(wrapper.find('StarIcon').length).toEqual(1)
  })

  it('should test click event on star and call onRate one time and pass `id` and `rating`', () => {
    wrapper.find('StarIcon').simulate('click')
    expect(onRateMock.mock.calls.length).toEqual(1)
    expect(onRateMock.mock.calls[0][0]).toEqual(
      'fc352593-c91d-4cf6-b689-7478ee2b61c8',
    )
    expect(onRateMock.mock.calls[0][1]).toEqual(5)
  })
})
