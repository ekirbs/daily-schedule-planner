// HEADER TIME DISPLAY FUNCTION
function displayTime() {
  setInterval(function() {
    $('#currentDay').text((dayjs()).format('dddd MMM, YYYY [-] h:mm:ss a'));
  }, 1000);
};

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

function getLocalStorage() {
  return JSON.parse(localStorage.getItem('storedInput')) || [];
};

function displayDescription() {

  $('.time-block').each(function() {

    var timeBlock = parseInt($(this).attr('id').split("hour-")[1]);

    var storedInput = getLocalStorage();
    // var description = localStorage.getItem(localStorage.key(itemTime));
    var itemTime = localStorage.getItem(storedInput);
    console.log(timeBlock, itemTime, description);

    // var specificItem = localStorage.getItem(localStorage.at(timeBlock));
    var specificItem = storedInput.at(timeBlock);
    console.log(storedInput, specificItem);
    // var currentInput;

    var description = localStorage.getItem(localStorage.key(timeBlock));

      // var storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
      // console.log(storedUserInfo);
    
      if (storedInput !== null) {
        // if (timeBlock === )
        // currentInput = storedInput;
        // $(this).children('.description').text(specificItem);
        $(this).children('.description').text(description);
      }
      // console.log(currentInput);
          
//     if (itemTime !== null) {
//       var storedInput = getLocalStorage();
//       var itemTime = localStorage.getItem(itemTime[timeBlock]);
//       var description = localStorage.getItem(description[timeBlock]);
//       console.log(storedInput);
      // console.log(timeBlock);
//       console.log(itemTime);
      // console.log(description);
//     }
  })

// //   if (itemTime !== null) {
// //     $(this).children('.description').val(localStorage.getItem(itemTime));
// //   }

};

displayTime();
displayDescription();

// FUNCTIONS BELOW ARE AFTER PAGE LOAD
$(function () {

  var currentTime = parseInt(dayjs().format('HH'));

  // TIME BLOCK COLOR CONDITIONAL
  $('.time-block').each(function() {

    var itemTime = parseInt($(this).attr("id").split("hour-")[1]);
    // console.log(itemTime);
    // console.log(currentTIme);
    console.log(itemTime, currentTime);

    if (itemTime > currentTime) {
      $(this).children('.description').addClass("future");  // is there a way to combine both removes?
      $(this).children('.description').removeClass("past");  // Or is there a way to make it only one specifically?
      $(this).children('.description').removeClass("present");  // The examples had the class on the div.  I have it on the description.  What's the difference?
    } else if (itemTime < currentTime) {
      $(this).children('.description').addClass("past");
      $(this).children('.description').removeClass("present");
      $(this).children('.description').removeClass("future");
    } else {
      $(this).children('.description').addClass("present");
      $(this).children('.description').removeClass("past");
      $(this).children('.description').removeClass("future");
    }

  })

  // SAVE BUTTON COLOR CONDITIONAL
  $('.saveBtn').each(function() {

    var itemTime = parseInt($(this).parent().attr("id").split("hour-")[1]);
    // console.log(itemTime);
    // console.log(currentTime);
    console.log(itemTime, currentTime);

    if (itemTime > currentTime) {
      $(this).addClass("future-btn");
      $(this).removeClass("past-btn");
      $(this).removeClass("present-btn");
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

  // SAVE BUTTON FUNCTION
  $(".saveBtn").on("click", function () {

    var itemTime = parseInt($(this).parent().attr("id").split("hour-")[1]);
    var description = $(this).siblings(".description").val();

    localStorage.setItem(itemTime, description);

  })

});