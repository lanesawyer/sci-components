import { generateSnapshots } from "@chanzuckerberg/story-utils";
import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import * as snapshotTestStoryFile from "./index.stories";
import Meta, { Test as TestStory } from "./index.stories";

// Returns a component that already contain all decorators from story level, meta level and global level.
const Test = composeStory(TestStory, Meta);

describe("<InputSlider />", () => {
  generateSnapshots(snapshotTestStoryFile);

  it("renders InputSlider component", () => {
    render(<Test {...Test.args} />);
    const InputSliderElement = screen.getByTestId("test-input-slider");
    expect(InputSliderElement).not.toBeNull();
  });
});
