# WatchWorthy
Levi and Conner's project #3

## User Story
AS an avid movie watched
I WANT to browse popular movie lists
SO THAT I can track my progress as I watch the movies

## Acceptance Criteria
GIVEN a movie list tracking website
WHEN I load the homepage
THEN I am presented with a landing page with prompts to sign in and a description of the movie tracking site
WHEN I click to signup
THEN I am presented with a signup from with prompts for username, email and password
WHEN I click to login
THEN I am able to make an account that authenticates through JWT
WHEN I login
THEN I am presented with all of the movie lists that I can look through and choose what to start tracking
WHEN I click to my lists
THEN I am presented with the movie lists that I decided to track
WHEN I finish watching a movie
THEN I can click the button to add a movie to the watched list
WHEN I want to rewatch a movie
THEN I can click the button again to mark the movie as unwatched, so you never lose track of what has and has not been watched
WHEN I click to logout
THEN I am logged out an redirected back to the login page

## Description
This web application was made to track movies that a user watches by creating an account, adding different movie lists to their own kept lists, and marking movies as either watched or unwatched as they progress through watching movies on said list.

## Table of Contents

- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Usage

When the web application loads, you are presented with a beautiful image of a locally captured trail in the woods. Below, there is a search bar where you are prompted to search for a city of your choosing. Right now, the web application is able to search for cities only; an idea for future development could be to implement different search criteria for the user.

![alt text](assets/images/screenshots/Screenshot%202022-12-11%20at%206.36.43%20PM.png)

As shown below, a search of the word "seattle" pulls results of local hiking trails, biking trails and campsites within a 25 mile proximity to the city. When the search button is clicked, the city name is stored to the local storage of the user's machine. In future development, we plan to incorporate the use of searched criteria with Google analytics to create reports that provide insights into the usage of our web application. The data is pulled using our first server side api, TrailAPI, and is organized and appended into clickable cards in three different columns. Each card has the title of the trail or campsite, a description of trail or campsite, and instructions to click the card to pull up directions via Google Maps.

![alt text](assets/images/screenshots/Screenshot%202022-12-11%20at%206.36.58%20PM.png)

Below is an example of the map that is loaded into a seperate tab once a card is clicked. In this case, I clicked the card of "Camp Long". To do this, we made a click event on the appended card using Google Maps Embed API based on the name derived from TrailAPI.

![alt text](assets/images/screenshots/Screenshot%202022-12-11%20at%206.50.00%20PM.png)

The next two screenshots show our About section, where we list who contributed to the project, which API we used and give photo credit. We recieved permission to use the photographs displayed on the web application.

![alt text](assets/images/screenshots/Screenshot%202022-12-11%20at%206.37.22%20PM.png)
![alt text](assets/images/screenshots/Screenshot%202022-12-11%20at%206.37.43%20PM.png)

## Credits

Contributors: Levi, Joon and Conner

APIs used: Trail API and Google Maps Embed API

Photo Credit: Jonathan Miske

## License 

MIT License, as listed on the Github repository.