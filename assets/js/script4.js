var saveBtn = document.querySelector('.saveBtn');
var description = document.querySelector('description');
var currentTime = dayjs().format('HH:00:00');  // var milTime = 
var storedInput = getLocalStorage();
// var today = dayjs();

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
function getLocalStorage() {
  return JSON.parse(localStorage.getItem('storedInput')) || [];
};

function displayDescriptions() {

};

displayTime();
displayDescriptions();

$(function () {
  
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
  $('.time-block').each(function() {
    // var itemTime = parseInt($(this).attr("id").split("hour")[1]);
    var itemTime = $(this).attr('id').replace('hour-', '');  // this line is still an issue
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

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
  $('saveBtn').on("click", function () {
    storeInput(); 
  })

  // var itemTime = $(this).attr('id').replace('hour-', '');
  // console.log(itemTime);

  function storeInput(userInput) {
    var itemTime = currentTime;
    var userInput = {
      item: description,
      itemTime: itemTime
    };
    
    console.log(storedInput);
    console.log(userInput);
    storedInput.push(userInput);
  
    localStorage.setItem('storedInput', JSON.stringify(storedInput));
  };
  
});