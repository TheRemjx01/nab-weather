import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Weather from "./Weather";

describe("<Weather />", () => {
  it("should be able to work correctly", () => {
    const Wrapper = shallow(<Weather />);
    expect(toJson(Wrapper)).toMatchSnapshot();
  });
});
