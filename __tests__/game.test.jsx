import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event/dist/types/setup";
import Game from "../pages/game";

describe("Game menu", () => {
  it("pauses game and opens menu when menu button is clicked", async () => {
    render(<Game />);

    const user = userEvent.setup();

    const menuButton = screen.getByRole("button", { name: /menu/i });

    user.click(menuButton);
  });
});
