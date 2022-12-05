var saveBtn = document.querySelector('.saveBtn');
var description = document.querySelector('description');
// var currentTime = parseInt(dayjs().format('HH'));  // when I used the radix [1], it only registered one digit, not two...why?
// var storedInput = getLocalStorage();
// var timeBlock = parseInt($('time-block').attr("id").split("hour-")[1]);


// TODO: Add code to display the current date in the header of the page.
function displayTime() {

  setInterval(function() {
    var today = dayjs().format('dddd MMM, YYYY [-] h:mm:ss a');
    $('#currentDay').text(today);
    // $('#currentDay').text(today.format('dddd MMM, YYYY [-] h:mm:ss a'));
  }, 1000);

};

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
// function getLocalStorage() {

//   return JSON.parse(localStorage.getItem('storedInput')) || [];

// };

function displayDescription() {
  $('time-block').each(function() {
    var itemTime = localStorage.getItem(itemTime);
    var storedDescription = localStorage.getItem(description);
    var timeBlock = parseInt($(this).attr('id').split("hour-")[1]);
  })

  if (itemTime !== null && itemTime === timeBlock) {
    $(this).children('.description').val(localStorage.getItem(itemTime));
    // $(this).children('.description').val(storedDescription);

    // $('.description').val(localStorage.getItem(itemTime));
  }
};

// function displayDescription() {
//   $('time-block').each(function() {
//   var itemTime = localstorage.getItem(itemTime);
//   var timeBlock = parseInt($(this).attr("id").split("hour-")[1]);

//   if 
// })

// function displayDescriptions() {
//   var storedInput = getLocalStorage();
//   console.log(storedInput);

//   $('time-block').each(function() {
//     var timeBlock = parseInt($(this).attr("id").split("hour-")[1]);
//     // for (i = 0; i < storedInput[description.length]; i++) {
//       if (storedInput[itemTime] === timeBlock) {
//         descriptionDisplay.textContent = description[i];
//       }
//         // else {
//         //   descriptionDisplay.textContent = "";
//         // }

//     // }

//   }) 
// //   // clear current projects on the page
// //   description.empty();


// //   // loop through each project and create a row
// //   for (var i = 0; i < storedInput.length; i += 1) {
// //     var item = storedInput[i];
//   // }
// };

displayTime();
displayDescription();

$(function () {

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
  $('.time-block').each(function() {

    var currentTime = parseInt(dayjs().format('HH'));
    var itemTime = parseInt($(this).attr("id").split("hour-")[1]);
    console.log(itemTime, currentTime);

    if (itemTime > currentTime) {
      $(this).addClass("future");  // is there a way to combine both removes?
      $(this).removeClass("past");    // Or is there a way to make it only one specificslly?
      $(this).removeClass("present");  // how to use 'this' and jquery?
    } else if (itemTime < currentTime) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    } else {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    }

  })

  $('.saveBtn').each(function() {

    var itemTime = parseInt($(this).parent().attr("id").split("hour-")[1]);
    console.log(itemTime, currentTime);

    if (itemTime > currentTime) {
      $(this).addClass("future-btn");  // is there a way to combine both removes?
      $(this).removeClass("past-btn");    // Or is there a way to make it only one specificslly?
      $(this).removeClass("present-btn");  // how to use 'this' and jquery?
    } else if (itemTime < currentTime) {
      $(this).addClass("past-btn");
      $(this).removeClass("present-btn");
      $(this).removeClass("future-btn");
    } else {
      $(this).addClass("present-btn");
      $(this).removeClass("past-btn");
      $(this).removeClass("future-btn");
    }

  })

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(".saveBtn").on("click", function () {


    // var itemTime = parseInt($('time-block').attr('id').split('hour-')[1]);
    // var description = $(this).siblings(".description").val();

    var itemTime = parseInt($(this).parent().attr("id").split("hour-")[1]);
    var description = $(this).siblings(".description").val();

    localStorage.setItem(itemTime, description);

  })

});

  // $('saveBtn').on("click", function () {
  //   var timeBlock = parseInt($(this).attr("id").split("hour-")[1]);

  //   var userInput = {
  //     item: description.trim(),
  //     itemTime: timeBlock,
  //   };

  //   var storedInput = getLocalStorage();

  //   console.log(userInput);
  //   console.log(storedInput);
  //   storedInput.push(userInput);
  
  //   localStorage.setItem('storedInput', JSON.stringify(storedInput));
  // })

  // $("#hour8 .description").val(localStorage.getItem("hour8"));
  // $("#hour9 .description").val(localStorage.getItem("hour9"));
  // $("#hour10 .description").val(localStorage.getItem("hour10"));
  // $("#hour11 .description").val(localStorage.getItem("hour11"));
  // $("#hour12 .description").val(localStorage.getItem("hour12"));
  // $("#hour13 .description").val(localStorage.getItem("hour13"));
  // $("#hour14 .description").val(localStorage.getItem("hour14"));
  // $("#hour15 .description").val(localStorage.getItem("hour15"));
  // $("#hour16 .description").val(localStorage.getItem("hour16"));
  // $("#hour17 .description").val(localStorage.getItem("hour17"));

// // Gets project data from local storage and displays it
// function displayDescriptions() {
//   // clear current projects on the page
//   description.empty();

//   // get projects from localStorage
//   var storedInput = getLocalStorage();

//   // loop through each project and create a row
//   for (var i = 0; i < storedInput.length; i += 1) {
//     var item = storedInput[i];
//   }
// }

// $('saveBtn').on("click", function () {
//   var timeBlock = parseInt($(this).attr("id").split("hour-")[1]);

//   var userInput = {
//     item: description.val().trim(),
//     itemTime: timeBlock.val(),
//   };

//   var storedInput = getLocalStorage();

//   console.log(userInput);
//   console.log(storedInput);
//   storedInput.push(userInput);

//   localStorage.setItem('storedInput', JSON.stringify(storedInput));
// })