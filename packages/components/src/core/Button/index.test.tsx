import { generateSnapshots } from "@chanzuckerberg/story-utils";
import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import * as snapshotTestStoryFile from "./index.stories";
import Meta, { Test as TestStory } from "./index.stories";

const Test = composeStory(TestStory, Meta);

describe("<button />", () => {
  generateSnapshots(snapshotTestStoryFile);

  it("renders Button component", () => {
    render(<Test />);
    const elements = screen.getAllByTestId("button");
    expect(elements.length).toBeTruthy();
  });
});
