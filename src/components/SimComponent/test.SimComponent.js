import React from 'react'
import { shallow } from 'enzyme'

import SimComponent from './SimComponent'

describe('SimComponent', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<SimComponent {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})