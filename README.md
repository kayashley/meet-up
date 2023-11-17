# Meet-Up App

A serverless, progressive web application, built with React using test-driven development (TDD) technique. The application will fetch its data using Google Calendars API.

## User Stories

Feature 1: Filter events by city

As a user,
I should be able to filter events by city,
So that I can view a list of events taking place in that city

Feature 2: Show/hide event details

As a user,
I should be able to show/hide event details,
So that I can view only certain details of events in a city

Feature 3: Specify number of events

As a user,
I should be able to state the number of events in a city
So that I can view only those events in that city

Feature 4: Use the app when offline

As a user,
I should be able to use the app offline,
So that I can access this data when I’m offline

Feature 5: Add an app shortcut to the home screen

As a user,
I should be able to add an app shortcut to the home screen,
So that I can access the app through the home screen for easy access

Feature 6: Display charts visualizing event details

As a user,
I should be able to see displayed charts visualizing event details,
So that I can see the different details of events in cities

## User Scenarios (Gherkin)

Scenario 1: When a user hasn’t searched for a specific city, show upcoming events from all cities.
Given: user hasn’t searched for any city
When: the user opens the app
Then: the user should see a list of upcoming events

Scenario 2: A user should see a list of suggestions when they search for a city.
Given: the main page is open
When: user starts typing in the city textbox
Then: the user should receive a list of cities (suggestions) that match what they’ve typed

Scenario 3: User can select a city from the suggested list
Given: user was typing “Berlin” in the city textbox AND the list of suggested cities is showing
When: the user selects a city (e.g. “Berlin, Germany”) AND the user should receive a ist of upcoming events in that city

Scenario 4: Use the app offline
Given: user uses the app offline
When: user accesses the app offline
Then: user should be able to use the app and all its functionality offline

Scenario 5: Add an app shortcut to the home screen
Given: user accesses the app through a shortcut on the home screen
When: user can click on a shortcut accessible from the home screen and brings them to the app
Then: user can use all of the apps functionalities

Scenario 6: Display charts visualizing details
Given: user can see the different charts and details
When: user searches for certain details and is presented with charts to visualize the details
Then: user can view these charts/details

# Serverless Functions

In this meet app, serverless functions will take an important in handling authorization for public calendar events from the Google Calendar API. This is crucial, as users will need to authenicate themselves in order to retrieve any data that will render in the app. Serverless functions will generate a
"token" that will provide access to the Google Calendar API.
