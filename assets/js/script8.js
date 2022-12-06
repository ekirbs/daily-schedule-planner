// ON PAGE LOAD, TIME & SAVED ITEM DISPLAY
function init() {
  setInterval(function() {
    $('#currentDay').text((dayjs()).format('dddd MMM, YYYY [-] h:mm:ss a'));
  }, 1000);

  $('.time-block').each(function() {
    var timeBlock = parseInt($(this).attr("id").split("-")[1]);
    $(this).children('.description').val(localStorage.getItem(timeBlock));
  })
}

init();

// FUNCTIONS BELOW ARE AFTER PAGE LOAD
$(function () {
  // COLOR CONDITIONAL
  $('.time-block').each(function() {
    var currentTime = parseInt(dayjs().format('HH'));
    var itemTime = parseInt($(this).attr("id").split("hour-")[1]);

    if (itemTime > currentTime) {
      $(this).children('.description').addClass("future").removeClass("past present");
      $(this).children('.saveBtn').addClass("future-btn").removeClass("past-btn present-btn");
    } else if (itemTime < currentTime) {
      $(this).children('.description').addClass("past").removeClass("present future");
      $(this).children('.saveBtn').addClass("past-btn").removeClass("present-btn future-btn");
    } else {
      $(this).children('.description').addClass("present").removeClass("past future");
      $(this).children('.saveBtn').addClass("present-btn").removeClass("past-btn future-btn");
    }
  })

  // SAVE BUTTON FUNCTION
  $(".saveBtn").on("click", function () {
    var itemTime = parseInt($(this).parent().attr("id").split("-")[1]);
    var description = $(this).siblings(".description").val().trim();

    localStorage.setItem(itemTime, description);
  })
});