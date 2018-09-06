import React from "react";
import renderer from "react-test-renderer";
import HelloMessage from "../hello_message";

jest.mock("../test.less", () => jest.fn());
jest.mock("../style2.less", () => jest.fn());

it("renders HelloMessage correctly", () => {
  const tree = renderer.create(<HelloMessage name="world" />).toJSON();
  expect(tree).toMatchSnapshot();
});
