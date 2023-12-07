// src/__tests__/NumberOfEvents.test.js

import { render } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
  });

  // input textbox
  test("renders input textbox", () => {
    const input = NumberOfEventsComponent.queryByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  // contains a textbox with an input value of 32
  test("renders a textbox with a default value of 32", () => {
    const input = NumberOfEventsComponent.queryByRole("textbox");
    expect(input).toHaveValue("32");
  });

  // input value within textbox changes according to the users input
  test("renders number of events when user types within the textbox", async () => {
    const input = NumberOfEventsComponent.queryByRole("textbox");
    await userEvent.type(input, "{backspace}{backspace}10");
    expect(input).toHaveValue("10");
  });
});
