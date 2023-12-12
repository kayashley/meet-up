Feature: Specify number of events
 Scenario: When user hasn't specified a number, 32 events are shown by default.
  Given user has opened the app
  When user has not specified any number of events
  Then 32 event elements are shown by default

 Scenario: User can change the number of events displayed.
  Given the app is opened
  When user changes the number of events 
  Then user is shown the number of events they changed it to 
