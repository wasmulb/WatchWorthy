# WatchWorthy
Levi and Conner's project #3

## User Story
AS an avid movie watcher
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
This web application was made to track movies that a user watches by creating an account, adding different movie lists to their own kept lists, and marking movies as either watched or unwatched as they progress through watching movies on their lists.

## Table of Contents

- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Usage

When the web application loads, you are presented with a login page with a navbar to navigate to different pages, a footer with the title of the application and a description of what the app is used for. The login page prompts email and password of a created account.

![alt text](./client/src/assets/images/screenshots/ScreenshotLogin.png)

The next screenshot shows the signup page. This allows the user to create an account using JWT authentication. Each user is has a username, email and password associated with their account.

![alt text](./client/src/assets/images/screenshots/ScreenshotSignup.png)

Below is what is loaded once the user logs in. The database holds multiple movie lists with many movies on each list. Only 5 movies per list are initially shown so that the user can scroll down to view multiple lists. A show more and show less button are implemented to let the user expand the amount of movies shown on each list. Once a list has been found that the user wishes to track their progress on, the user can click the button to add that list to their own list of movies.

![alt text](./client/src/assets/images/screenshots/ScreenshotAllLists1.png)
![alt text](./client/src/assets/images/screenshots/ScreenshotAllLists2.png)

The next screenshot shows the user the my-lists page that is loaded when clicking on the navbar after deciding on which lists to track. No movies are initially displayed to the user to let them scroll through which list they want to begin tracking.

![alt text](./client/src/assets/images/screenshots/ScreenshotShowAllMyLists.png)

The user can click the show more button to display +5 movies on the list, where the user is prompted to click a button once the movie has been watched. This button marks the movie as watched and moves it from the top of the list.

![alt text](./client/src/assets/images/screenshots/ScreenshotWatched.png)

The user is prompted to click another button to remove the movie from being watched, which can be helpful if a user wants to rewatch a movie. This button marks the movie as unwatched and adds it back to the top of the list.

![alt text](./client/src/assets/images/screenshots/ScreenshotUnWatch.png)

## Credits

Contributors: Levi and Conner

## License 

MIT License, as listed on the Github repository.
