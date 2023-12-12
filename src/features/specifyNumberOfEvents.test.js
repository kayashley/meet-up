import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn't specified a number, 32 events are shown by default.", ({
    given,
    when,
    then,
  }) => {
    given("user has opened the app", () => {});

    when("user has not specified any number of events", () => {});

    then(/^(\d+) event elements are shown by default$/, (arg0) => {});
  });

  test("User can change the number of events displayed.", ({
    given,
    when,
    then,
  }) => {
    given("the app is opened", () => {});

    when("user changes the number of events", () => {});

    then("user is shown the number of events they changed it to", () => {});
  });
});
