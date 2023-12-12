Feature: Show/hide event details
 Scenario: An event element is collapsed by default.
  Given user has opened the app
  When list of upcoming events is displayed
  Then each event element should be collapsed, showing only basic event information

 Scenario: User can expand an event to see details.
  Given user has opened the app and the list of upcoming events is shown 
  When user clicks on a button to expand the events details 
  Then the event element should expand revealing additional details about the event

 Scenario: User can collapse an event to hide details.
  Given user has opened the app and the list of upcoming events is shown
  When user clicks on a button to collapse the event details
  Then the event element should collapse the additional event details
