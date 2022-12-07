# Daily Schedule Planner

## Description

This is a simple program that allows the user to plan their daily schedule.  When the page is closed, the schedule entries will be saved and loaded again when the page loads.  Because people starts their day at a different time, it has been explanded to a 24-hour schedule to accomodate the early risers.  I created this to practice my skills at storing data in local storage and retrieving it again when necessary how to conditionally change elements using javascript, and how to utilize dayjs.

Link: [Daily Schedule Planner](https://ekirbs.github.io/daily-schedule-planner/ 'A Daily Schedule Planner.')

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

N/A

## Usage

The current date and time is displayed in the header.  The calendar is 24-hour, starting at 12AM, and is color-coded depending on whether that time has already passed or not (red means the time of the day has passed, blue means it's the current hour, and green means that time is still coming up).  If the user enters any information into a time block and pressed the save button to the right, the information will be stored.  When the page is closed and re-opened, the saved information will populate the page again until it is removed.

![Tutorial GIF.](./assets/images/tutor-gif.gif)

## Credits

w3schools.com

stackoverflow.com

## License

N/A