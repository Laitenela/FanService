import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import { Button } from "..";

test('demo', () => {
  expect(true).toBe(true);
});

test("Render Button", () => {
  render(<Button>Test</Button>);
  expect(true).toBeTruthy();
})