import React from 'react';
import { mount } from 'enzyme';
import PortfoliosItem from '../../components/PortfoliosItem';
import opgg from "../../assets/portFolioImgs/op-gg1.png";

describe("testing PortfoliosItem", () => {
    const props = {
        webVisibleLink: "opjj.herokuapp.com",
        webUrl: "https://opjj.herokuapp.com/",
        technologyStack: "React, Express",
        backgroundImg: { opgg },
        originalBewSite: "https://op.gg/",
    }

    it("state changes on click", () => {
        const wrapper = mount(
            <PortfoliosItem webVisibleLink={props.webVisibleLink}
                webUrl={props.webUrl}
                technologyStack={props.technologyStack}
                backgroundImg={props.backgroundImg}
                originalBewSite={props.originalBewSite}
            />)

        const buttonToChangeState = wrapper.find('.portfoliosItem_container')

        expect(wrapper.contains(props.technologyStack)).toBe(false)

        buttonToChangeState.simulate('click')

        expect(wrapper.contains(props.technologyStack)).toBe(true)


    })
})