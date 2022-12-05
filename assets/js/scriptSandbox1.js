// // displays the current date in the header, in addition to the timenow for saved items
// var currentDay = dayjs().format('dddd, MMM Do YYYY');
// var timeNow = dayjs().hour();
// $("#currentDay").html(currentDay);

// // function for save button in conjunction with the var text and time
// $(document).ready(function () {
//     $(".saveBtn").on("click", function () {
//         var text = $(this).siblings(".description").val();
//         var time = $(this).parent().attr("id");

//         // saving items via local storage
//         localStorage.setItem(time, text);
//     })

//     // time block function for past, future, and present items

//     $(".time-block").each(function () {
//         var blockTime = parseInt($(this).attr("id").split("hour")[1]);
//         console.log(blockTime, timeNow);
//         if (blockTime < timeNow) {
//             $(this).removeClass("future");
//             $(this).removeClass("present");
//             $(this).addClass("past");
//         }
//         else if (blockTime === timeNow) {
//             $(this).removeClass("past");
//             $(this).removeClass("future");
//             $(this).addClass("present");
//         }
//         else {
//             $(this).removeClass("present");
//             $(this).removeClass("past");
//             $(this).addClass("future");
//         }
//     })

//     // allows user to save their tasks in local storage upon entering

//     $("#hour8 .description").val(localStorage.getItem("hour8"));
//     $("#hour9 .description").val(localStorage.getItem("hour9"));
//     $("#hour10 .description").val(localStorage.getItem("hour10"));
//     $("#hour11 .description").val(localStorage.getItem("hour11"));
//     $("#hour12 .description").val(localStorage.getItem("hour12"));
//     $("#hour13 .description").val(localStorage.getItem("hour13"));
//     $("#hour14 .description").val(localStorage.getItem("hour14"));
//     $("#hour15 .description").val(localStorage.getItem("hour15"));
//     $("#hour16 .description").val(localStorage.getItem("hour16"));
//     $("#hour17 .description").val(localStorage.getItem("hour17"));
// })




// // save reference to important DOM elements
// var timeDisplayEl = $('#time-display');
// var projectDisplayEl = $('#project-display');
// var projectFormEl = $('#project-form');
// var projectNameInputEl = $('#project-name-input');
// var projectTypeInputEl = $('#project-type-input');
// var projectDateInputEl = $('#project-date-input');

// // handle displaying the time
// function displayTime() {
//   var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
//   timeDisplayEl.text(rightNow);
// }

// // Reads projects from local storage and returns array of project objects.
// // Returns an empty array ([]) if there aren't any projects.
// function readProjectsFromStorage() {
//   var projects = localStorage.getItem('projects');
//   if (projects) {
//     projects = JSON.parse(projects);
//   } else {
//     projects = [];
//   }
//   return projects;
// }

// // Takes an array of projects and saves them in localStorage.
// function saveProjectsToStorage(projects) {
//   localStorage.setItem('projects', JSON.stringify(projects));
// }

// // Gets project data from local storage and displays it
// function printProjectData() {
//   // clear current projects on the page
//   projectDisplayEl.empty();

//   // get projects from localStorage
//   var projects = readProjectsFromStorage();

//   // loop through each project and create a row
//   for (var i = 0; i < projects.length; i += 1) {
//     var project = projects[i];
//     var projectDate = dayjs(project.date);
//     // get date/time for start of today
//     var today = dayjs().startOf('day');

//     // Create row and columns for project
//     var rowEl = $('<tr>');
//     var nameEL = $('<td>').text(project.name);
//     var typeEl = $('<td>').text(project.type);
//     var dateEl = $('<td>').text(projectDate.format('MM/DD/YYYY'));

//     // Save the index of the project as a data-* attribute on the button. This
//     // will be used when removing the project from the array.
//     var deleteEl = $(
//       '<td><button class="btn btn-sm btn-delete-project" data-index="' +
//         i +
//         '">X</button></td>'
//     );

//     // add class to row by comparing project date to today's date
//     if (projectDate.isBefore(today)) {
//       rowEl.addClass('project-late');
//     } else if (projectDate.isSame(today)) {
//       rowEl.addClass('project-today');
//     }

//     // append elements to DOM to display them
//     rowEl.append(nameEL, typeEl, dateEl, deleteEl);
//     projectDisplayEl.append(rowEl);
//   }
// }

// // Removes a project from local storage and prints the project data
// function handleDeleteProject() {
//   var projectIndex = parseInt($(this).attr('data-index'));
//   var projects = readProjectsFromStorage();
//   // remove project from the array
//   projects.splice(projectIndex, 1);
//   saveProjectsToStorage(projects);

//   // print projects
//   printProjectData();
// }

// // Adds a project to local storage and prints the project data
// function handleProjectFormSubmit(event) {
//   event.preventDefault();

//   // read user input from the form
//   var projectName = projectNameInputEl.val().trim();
//   var projectType = projectTypeInputEl.val(); // don't need to trim select input
//   var projectDate = projectDateInputEl.val(); // yyyy-mm-dd format

//   var newProject = {
//     name: projectName,
//     type: projectType,
//     date: projectDate,
//   };

//   // add project to local storage
//   var projects = readProjectsFromStorage();
//   projects.push(newProject);
//   saveProjectsToStorage(projects);

//   // print project data
//   printProjectData();

//   // clear the form inputs
//   projectNameInputEl.val('');
//   projectTypeInputEl.val('');
//   projectDateInputEl.val('');
// }

// projectFormEl.on('submit', handleProjectFormSubmit);

// // Use jQuery event delegation to listen for clicks on dynamically added delete
// // buttons.
// projectDisplayEl.on('click', '.btn-delete-project', handleDeleteProject);

// displayTime();
// setInterval(displayTime, 1000);

// printProjectData();

// function usePlanner() {

//     $(".hour").each(function() {
//         var currHour = $(this).text();
//         var currPlan = localStorage.getItem(currHour);

//         // console.log(this);
//         // console.log(currHour);

//         if(currPlan !== null) {
//             $(this).siblings(".plan").val(currPlan);
//         }
//     });
// }