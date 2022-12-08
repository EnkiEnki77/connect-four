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
import Rules from "../pages/rules";

describe("rules functionality", () => {
  it("checks that check image switches images when hovered and back to original when unhovered", async () => {
    const { container } = render(<Rules />);

    const user = userEvent.setup();

    // checks that initial image is rendered
    const checkImage = screen.getByAltText("check image");
    const checkImageHovered = screen.queryByAltText("check image hovered");
    expect(checkImageHovered).not.toBeVisible;
    expect(checkImage).toBeInTheDocument();

    // // hovers over initial image
    fireEvent.mouseEnter(checkImage);

    screen.debug();

    // checks that hoverImage replaces initial image

    expect(checkImage).not.toBeVisible;
    expect(checkImageHovered).toBeInTheDocument();

    fireEvent.mouseLeave(checkImageHovered);

    expect(checkImageHovered).not.toBeVisible;
    expect(checkImage).toBeInTheDocument();
  });
});
