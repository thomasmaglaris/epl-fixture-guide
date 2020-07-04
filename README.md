# epl-fixture-guide

Link to deployed application https://thomasmaglaris.github.io/epl-fixture-guide/

# Project Overview
Our initial vision for this project was to have a website that presents the time, date, location and weather for upcoming games for a team selected by the user. On top of that extra features were added to the website including the highlights video and league table.

## Front-End
The user input taken from the user, crucial to all the back-end components, is from a dropdown search bar containing each team in the EPL. Each team has was given a unique value attribute to make them accessible through javascript.

The CSS Framework used for this project was Bulma. Bulma allowed us to utilize a grid system similar to Bootstrap's which we used to display the different components as desired. In combination with Bulma we used Google Fonts to style the webpage and integrated an image for the header.

## Back-End
Multiple APIs and libraries were used in Javascript to create the functionality desired.

### Fixtures & Weather
The football-data API was used to retrieve the upcoming fixtures for the team selected in the dropdown search bar. Through the use of moment.JS the time and match of the date was converted to the local time of the user. When a team is entered in the search bar the API returns a game with two teams, one being distinguished as the home team. The location of the home team's stadium, along with the time and date of the match in the original time zone, was used as input for the Weather API. The Weather API takes these inputted values to retrieve the temperature and humidity as well as the weather conditions that was displayed on the webpage in the form of a small icon.

### Highlights & Tables
The table is the only API used that doesn't take the dropdown search user input. This API displays the table displaying the ladder for the EPL and is shown next to the fixture information on screen.

The highlights video is retrieved from the YouTube API with a video ID assigned to each value of the user input options in the dropdown search bar. The video appears in a modal window that opens when a button containing the text "view highlights" is clicked (this button appears on screen below the fixture information). When the modal window is closed the application stops the YouTube video so that the audio doesn't continue in the background when the visual isn't on screen.