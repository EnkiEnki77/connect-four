// __tests__/index.test.jsx

import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Menu functionality", () => {
  it("checks that play vs player button routes to game board", async () => {
    render(<Home />);

    const user = userEvent.setup();

    const playVsPlayer = screen.getByRole("button", {
      name: /play vs player/i,
    });

    await user.click(playVsPlayer);

    expect(playVsPlayer).toBeInTheDocument();
  });
});
