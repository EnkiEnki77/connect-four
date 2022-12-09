// __tests__/index.test.jsx

import {
  fireEvent,
  logRoles,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Game from "../pages/game";

describe("game functionality", () => {
  it("checks that timer starts at 15s", () => {
    const { container } = render(<Game />);

    const timer = screen.getByRole("heading", { name: /15s/i });

    expect(timer).toBeInTheDocument();
  });

  it("checks that player 1 goes first", () => {
    const { container } = render(<Game />);

    logRoles(container);
    const player1 = screen.getByText(/player 1's turn/i);

    expect(player1).toBeInTheDocument();
  });
});
