var saveBtn = document.querySelector('.saveBtn');
var description = document.querySelector('description');
var currentTime;
var today = dayjs();

function getLocalStorage1() {
  return JSON.parse(localStorage.getItem('storedInput1')) || [];
};

function displayItems() {
  // console.log("item showed");
    description.textContent = storedInput[currentItem].item;
};

function timeDisplay() {
  setInterval(function() {
    currentTime = dayjs().format('HH:00:00');
    $('#currentDay').text(today.format('dddd'));
    // var time = dayjs().format('dddd MMM, YYYY [-] h:mm:ss a');
    // $('#currentDay').text(time);
  }, 1000);
};

timeDisplay();
displayItems();

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  $('saveBtn').on("click", function () {
    storeInput(); 
  })

  function storeInput(userInput1) {
    var storedInput1 = getLocalStorage1();
    var itemTime1 = currentTime;
    var userInput1 = {
      item: description,
      itemTime1: itemTime1
    };
    
    console.log(storedInput1);
    console.log(userInput1);
    storedInput1.push(userInput1);
  
    localStorage.setItem('storedInput1', JSON.stringify(storedInput1));
  };

  if (itemTime1 > currentTime) {
    item.classList.add("future");  // is there a way to combine both removes?
    item.classList.remove("past");    // Or is there a way to make it only one specificslly?
    item.classList.remove("present");
  } else if (itemTime1 < currentTime) {
    item.classList.add("past");
    item.classList.remove("future");
    item.classList.remove("present");
  } else {
    item.classList.add("present");
    item.classList.remove("past");
    item.classList.remove("future");
  }


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});