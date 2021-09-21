import React from "react";
import { screen } from "@testing-library/react";
import { render } from "./test-utils";
import { App } from "./App";

beforeEach(() => {
  render(<App />);
});
test("renders app", () => {
  expect(screen.getByText(/editor mode/i)).toBeInTheDocument();
});
