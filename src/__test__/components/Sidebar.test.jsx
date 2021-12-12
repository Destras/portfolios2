import SideBar from "../../components/SideBar";
import SideBarButton from "../../components/SideBarButton";
import { shallow } from "enzyme";
import React from "react";
import { Home } from "react-feather";

describe("Testing sidebar", () => {
  it("Testing sidebarContainer amount of children", () => {
    const wrapper = shallow(<SideBar />);

    expect(wrapper.children().length).toEqual(4);
  });
});

describe("Testing sidebarButton", () => {
  it("Testing props", () => {
    const title = "home";
    const wrapper = shallow(<SideBarButton to="/" title={title} Icon={Home} />);

    expect(
      wrapper.containsAllMatchingElements([<Home />, <h2>{title}</h2>])
    ).toBe(true);
  });
});
