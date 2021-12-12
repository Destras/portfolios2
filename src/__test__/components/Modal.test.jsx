import React from 'react'
import Modal from "../../components/Modal"
import { shallow } from "enzyme";

describe('Testing Modal.tsx', () => {
    it("testing if modal renders when isOpen is true", () => {
        const children = <div className="unique" />

        const wrapper = shallow(
            <Modal isOpen={true}>
                {children}
            </Modal>)

        expect(wrapper.contains(children)).toEqual(true)
    })

    it("testing if modal dont render when isOpen is false", () => {
        const children = <div className="unique" />

        const wrapper = shallow(
            <Modal isOpen={false}>
                {children}
            </Modal>)

        expect(wrapper.contains(children)).toEqual(false)
    })

    it("testing if modal closes when clicked outside of modal", () => {
        const functionMock = jest.fn()

        const modalClickableId = 'modalRelative'
        const e = { target: { id: modalClickableId } }

        const wrapper = shallow(<Modal isOpen={true} toggleModal={functionMock} />)

        const modalContainer = wrapper.find('#' + modalClickableId)

        modalContainer.simulate('click', e)
        expect(functionMock).toHaveBeenCalledTimes(1);
    })

    it("testing if modal closes when close button clicked", () => {
        const functionMock = jest.fn()

        const wrapper = shallow(<Modal isOpen={true} toggleModal={functionMock} />)

        const closeButton = wrapper.find('#modalCloseButton')

        closeButton.simulate('click')
        expect(functionMock).toHaveBeenCalledTimes(1);
    })
})

