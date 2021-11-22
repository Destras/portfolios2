import { shallow } from "enzyme";
import React from "react";
import AnimatedButton from "../../components/AnimatedButton";
import { Archive } from "react-feather";

describe("<AnimatedButton /> tests", () => {
  it("Checking props", () => {
    const mockCallBack = jest.fn();

    const wrapper = shallow(
      <AnimatedButton onClick={mockCallBack} Icon={Archive}>
        <div className="unique" />
      </AnimatedButton>
    );

    expect(wrapper.containsMatchingElement(<Archive />)).toEqual(true);

    expect(wrapper.contains(<div className="unique" />)).toEqual(true);

    expect(wrapper.prop("onClick")).toBe(mockCallBack);
    
    expect(wrapper.prop("type")).toBe("button");
  });

  it("Checking if button works", () => {
    const mockCallBack = jest.fn();

    const wrapper = shallow(
      <AnimatedButton onClick={mockCallBack} Icon={Archive}>
        <div className="unique" />
      </AnimatedButton>
    );

    wrapper.simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
