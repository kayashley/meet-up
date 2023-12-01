// src/__tests__/Event.test.js

import { render } from "@testing-library/react";
import Event from "../components/Event";
import mockData from "../mock-data";
import userEvent from "@testing-library/user-event";

const mockEvent = mockData[0];

describe("<Event /> component", () => {
  let EventComponent;
  beforeEach(() => {
    EventComponent = render(<Event event={mockEvent} />);
  });

  // event title
  test("renders events title", () => {
    const title = EventComponent.queryByText(mockEvent.summary);
    expect(title).toBeInTheDocument();
  });

  // event start time
  test("renders the start time of event", () => {
    const time = EventComponent.queryByText(mockEvent.created);
    expect(time).toBeInTheDocument();
  });

  // event location
  test("renders event location", () => {
    const location = EventComponent.queryByText(mockEvent.location);
    expect(location).toBeInTheDocument();
  });

  // event show details with button
  test("renders event details with button (show details)", () => {
    const button = EventComponent.queryByText("show details");
    expect(button).toBeInTheDocument();
  });

  // event details are hidden by default
  test("renders by default the hidden event details", () => {
    const eventDOM = EventComponent.container.firstChild;
    const details = eventDOM.querySelector(".details");
    expect(details).not.toBeInTheDocument();
  });

  // event details are shown after user clicks button 'show details'
  test("renders event details once the user clicks button (show details)", async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByText("show details");
    await user.click(button);

    const eventDOM = EventComponent.container.firstChild;
    const details = eventDOM.querySelector(".details");
    expect(details).toBeInTheDocument();
  });

  // event details are hidden after user clicks button 'hide details'
  test("renders event details are hidden once user clicks on button (hide details", async () => {
    const button = EventComponent.queryByText("show details");
    const eventDOM = EventComponent.container.firstChild;
    await userEvent.click(button);

    const hideButton = EventComponent.queryByText("hide details");
    await userEvent.click(hideButton);

    const details = eventDOM.querySelector(".details");
    expect(details).not.toBeInTheDocument();
  });
});
