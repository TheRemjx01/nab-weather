import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("<App />", () => {
  it("should be able to render", () => {
    const Wrapper = shallow(<App />);
    expect(Wrapper).toMatchSnapshot();
  });
});
