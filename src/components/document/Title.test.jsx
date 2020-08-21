import React from "react";
import { mount } from "enzyme";
import Title from "./Title";

describe("Title should be work correctly", () => {
  beforeEach(() => {
    document.title = "";
  });

  it("should be able to change document title", () => {
    const mockTitle = "mock title";
    mount(<Title text={mockTitle} />);
    expect(document.title).toBe(mockTitle);
  });
});
