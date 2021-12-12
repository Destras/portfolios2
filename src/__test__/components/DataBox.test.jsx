import React from 'react'
import { shallow } from 'enzyme'
import DataBox from '../../components/DataBox'

describe('Testing DataBox', () => {
    it('Testing render', () => {
        const props = {
            number: 2,
            title: "first <br /> second <br /> third"
        }
        const wrapper = shallow(<DataBox number={props.number} title={props.title} />)

        expect(wrapper.contains(props.number)).toBe(true)
        expect(wrapper.containsAllMatchingElements([<p>first</p>, <p>second</p>, <p>third</p>])).toBe(true)
    })
})