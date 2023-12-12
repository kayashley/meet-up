import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/showHideAnEventDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default.", ({ given, when, then }) => {
    given("user has opened the app", () => {});

    when("list of upcoming events is displayed", () => {});

    then(
      "each event element should be collapsed, showing only basic event information",
      () => {}
    );
  });

  test("User can expand an event to see details.", ({ given, when, then }) => {
    given(
      "user has opened the app and the list of upcoming events is shown",
      () => {}
    );

    when("user clicks on a button to expand the events details", () => {});

    then(
      "the event element should expand revealing additional details about the event",
      () => {}
    );
  });

  test("User can collapse an event to hide details.", ({
    given,
    when,
    then,
  }) => {
    given(
      "user has opened the app and the list of upcoming events is shown",
      () => {}
    );

    when("user clicks on a button to collapse the event details", () => {});

    then(
      "the event element should collapse the additional event details",
      () => {}
    );
  });
});
