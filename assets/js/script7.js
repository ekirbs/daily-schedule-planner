// HEADER TIME DISPLAY FUNCTION
function displayTime() {
  setInterval(function() {
    $('#currentDay').text((dayjs()).format('dddd MMM, YYYY [-] h:mm:ss a'));
  }, 1000);
};

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
function displayDescription() {
  $('.time-block').each(function() {
    var timeBlock = parseInt($(this).attr("id").split("-")[1]);
    $(this).children('.description').val(localStorage.getItem(timeBlock));
  })
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
    // console.log(itemTime, currentTime);

    if (itemTime > currentTime) {
      $(this).children('.description').addClass("future");  // is there a way to combine both removes?
      $(this).children('.description').removeClass("past");  // Or is there a way to make it only one specifically?
      $(this).children('.description').removeClass("present");  // The examples had the class on the div.  I have it on the description.  What's the difference?
      $(this).children('.saveBtn').addClass("future-btn");
      $(this).children('.saveBtn').removeClass("past-btn");
      $(this).children('.saveBtn').removeClass("present-btn");
    } else if (itemTime < currentTime) {
      $(this).children('.description').addClass("past");
      $(this).children('.description').removeClass("present");
      $(this).children('.description').removeClass("future");
      $(this).children('.saveBtn').addClass("past-btn");
      $(this).children('.saveBtn').removeClass("present-btn");
      $(this).children('.saveBtn').removeClass("future-btn");
    } else {
      $(this).children('.description').addClass("present");
      $(this).children('.description').removeClass("past");
      $(this).children('.description').removeClass("future");
      $(this).children('.saveBtn').addClass("present-btn");
      $(this).children('.saveBtn').removeClass("past-btn");
      $(this).children('.saveBtn').removeClass("future-btn");
    }

  })

  // $('.saveBtn').each(function() {

  //   var itemTime = parseInt($(this).parent().attr("id").split("hour-")[1]);
  //   // console.log(itemTime);
  //   // console.log(currentTime);
  //   console.log(itemTime, currentTime);

  //   if (itemTime > currentTime) {
  //     $(this).addClass("future-btn");
  //     $(this).removeClass("past-btn");
  //     $(this).removeClass("present-btn");
  //   } else if (itemTime < currentTime) {
  //     $(this).addClass("past-btn");
  //     $(this).removeClass("present-btn");
  //     $(this).removeClass("future-btn");
  //   } else {
  //     $(this).addClass("present-btn");
  //     $(this).removeClass("past-btn");
  //     $(this).removeClass("future-btn");
  //   }

  // })

  // SAVE BUTTON FUNCTION
  $(".saveBtn").on("click", function () {

    var itemTime = parseInt($(this).parent().attr("id").split("-")[1]);
    var description = $(this).siblings(".description").val().trim();

    localStorage.setItem(itemTime, description);

  })

});