/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import { getEpisodes } from "../utils/episodes-handlers";

describe("Home", () => {
  it("renders a heading", () => {
    const firstEpisode = getEpisodes()[0]["images"][0];
    render(<Home name={"Episode x"} images={[firstEpisode]} />);

    const heading = screen.getByRole("heading", {
      name: /Episode x/i,
    });

    const image = screen.getByTestId("comic-image");

    expect(heading).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
