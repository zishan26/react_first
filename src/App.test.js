import { render, screen } from "@testing-library/react";
import App from "./App";
import { Login } from "./Pages/login";

test("renders learn react link", () => {
  render(<Login />);
  const linkElement = screen.getByText(/LOGIN/i);
  expect(linkElement).toBeInTheDocument();
});

test("test2", () => {
  const component = render(<App />);
  const childElement = component.getByText(/Username/i);
  expect(childElement).toBeInTheDocument();
});
