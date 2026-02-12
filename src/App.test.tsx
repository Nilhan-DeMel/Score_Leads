import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HomePage } from "./ui/pages/HomePage";

describe("Sanity Test", () => {
  it("should render the HomePage headline", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Score your/i)).toBeInTheDocument();
  });

  it("pure logic test", () => {
    expect(1 + 1).toBe(2);
  });
});
