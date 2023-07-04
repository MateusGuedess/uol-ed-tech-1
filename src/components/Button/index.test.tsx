import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from ".";

it("should render Button", async () => {
  render(<Button>Test</Button>);

  expect(screen.getByText("Test")).toBeInTheDocument();
});
