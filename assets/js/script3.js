var saveBtn = document.querySelector('.saveBtn');
var description = document.querySelector('description');
var currentTime = dayjs().format('HH:00:00');
var storedInput = getLocalStorage();
var today = dayjs();
var currentItem;
// var currentItem = 'description enetered into specific id';
// var itemTime = $(this).attr('id').replace('hour-', '');

function getLocalStorage() {
  return JSON.parse(localStorage.getItem('storedInput')) || [];
};

function displayItems() {
  // console.log("item showed");
    description.textContent = storedInput[currentItems].items;
};

// function displayItems() {
//   for (var i = 0; i < items.length; i++) {
//     var items = storedItems[i].items;
    // console.log(items);

//     var li = document.createElement("li");
//     li.textContent = `${currentItem}`;
//     li.setAttribute("data-index", i);

//     itemList.appendChild(li);
//   }
// };

// function displayItems() {
//   // console.log("item showed");
//     for (var i = 0; i < items.length; i++) {
//      description.textContent = storedInput[currentItems].item;
//      description.innerHTML = `<li>${storedInput[currentItems].item[i]}</li>`;
//     };
// };

function timeDisplay() {
  setInterval(function() {
    // currentTime = dayjs().format('HH:00:00');
    $('#currentDay').text(today.format('dddd'));
    // var time = dayjs().format('dddd MMM, YYYY [-] h:mm:ss a');
    // $('#currentDay').text(time);
  }, 1000);
};

timeDisplay();
displayItems();

$('.time-block').each(function() {
  var itemTime = $(this).attr('id').replace('hour-', '');
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

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  $('saveBtn').on("click", function () {
    storeInput(); 
  })

  var itemTime = $(this).attr('id').replace('hour-', '');
  console.log(itemTime);

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


// $('input').length

// var itemTime = parseInt(string, 10);

// // USING 'THIS'

// $(document).ready(function () {
//   $('hour-').click(function () {
//       var i = $(this).attr('id').replace('hour-', '');
//       $('#result').text(i);
//   });
// });