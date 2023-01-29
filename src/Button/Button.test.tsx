import React from "react";
import * as ReactTestRenderer from "react-test-renderer";
import { expect, it } from "@jest/globals";
import Button from "./Button";

it("Matches DOM Snapshot", () => {
  const tree = ReactTestRenderer.create(
    <Button size="md" variant="primary">
      hello
    </Button>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
