Weather App
===========

Description
-----------

The Weather App is a web application that retrieves and displays weather information for a specified location. The app fetches weather data from the Visual Crossing Weather API and displays relevant information, including the temperature (converted from Fahrenheit to Celsius), feels-like temperature, and weather conditions. Additionally, the background image changes based on the weather conditions using appropriate images.

Features
--------

-   Fetches current weather data for a specified location
-   Displays weather conditions, temperature, and feels-like temperature
-   Changes background image based on weather conditions

Technologies Used
-----------------

-   HTML
-   CSS
-   JavaScript
-   Visual Crossing Weather API

Getting Started
---------------

### Prerequisites

To run this project locally, you need to have:

-   A web browser
-   An internet connection

### Installation

1.  Clone the repository:

bash

Copy code

`git clone https://github.com/your-username/weather-app.git`

1.  Navigate to the project directory:

bash

Copy code

`cd weather-app`

1.  Open `index.html` in your web browser.

### Usage

1.  Open the Weather App in your web browser.
2.  Enter a location in the input field and click the "Get weather" button.
3.  The app will display the current weather information for the specified location.

API References
--------------

-   Visual Crossing Weather API

Code Overview
-------------

### HTML

The HTML structure consists of a main wrapper, a form for user input, and containers for displaying weather information.

### CSS

CSS is used for styling the layout and background images based on weather conditions. Background images are defined using CSS variables.

### JavaScript

JavaScript is used to handle API requests, data manipulation, and DOM updates. The main functions include:

-   `getWeather(location)`: Fetches weather data for the specified location.
-   `returnWeatherToday(location)`: Retrieves the current weather conditions.
-   `timeToday(location)`: Main logic to update the UI with weather information and background image.

Live Demo
---------

Check out the live demo of the Weather App here. https://rastko27.github.io/weather-app/

Contributing
------------

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

License
-------

This project is licensed under the MIT License - see the LICENSE file for details.

Made by Rastko Strbac @2024.
