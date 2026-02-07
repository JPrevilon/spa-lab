import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders the application header", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", {
      name: /personal project showcase app/i,
    })
  ).toBeInTheDocument();
});

test("renders initial projects", () => {
  render(<App />);
  expect(screen.getByText(/project 1/i)).toBeInTheDocument();
  expect(screen.getByText(/project 2/i)).toBeInTheDocument();
});

test("allows a user to add a new project", () => {
  render(<App />);

  fireEvent.change(screen.getByPlaceholderText(/project title/i), {
    target: { value: "New Test Project" },
  });

  fireEvent.change(screen.getByPlaceholderText(/project description/i), {
    target: { value: "This is a test description" },
  });

  fireEvent.click(
    screen.getByRole("button", { name: /add project/i })
  );

  expect(screen.getByText(/new test project/i)).toBeInTheDocument();
});

test("filters projects based on search input", () => {
  render(<App />);

  fireEvent.change(screen.getByPlaceholderText(/search projects/i), {
    target: { value: "project 1" },
  });

  expect(screen.getByText(/project 1/i)).toBeInTheDocument();
  expect(screen.queryByText(/project 2/i)).toBeNull();
});
