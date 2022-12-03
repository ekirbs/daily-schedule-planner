var saveBtn = document.querySelector('.saveBtn');
var description = document.querySelector('description');
var currentTime;
var today = dayjs();

function getLocalStorage1() {
  return JSON.parse(localStorage.getItem('storedInput1')) || [];
};

function getLocalStorage2() {
  return JSON.parse(localStorage.getItem('storedInput2')) || []
};

function getLocalStorage3() {
  return JSON.parse(localStorage.getItem('storedInput3')) || []
};

function getLocalStorage4() {
  return JSON.parse(localStorage.getItem('storedInput4')) || []
};

function getLocalStorage5() {
  return JSON.parse(localStorage.getItem('storedInput5')) || []
};

function getLocalStorage6() {
  return JSON.parse(localStorage.getItem('storedInput6')) || []
};

function getLocalStorage7() {
  return JSON.parse(localStorage.getItem('storedInput7')) || []
};

function getLocalStorage8() {
  return JSON.parse(localStorage.getItem('storedInput8')) || []
};

function getLocalStorage9() {
  return JSON.parse(localStorage.getItem('storedInput9')) || []
};

function getLocalStorage10() {
  return JSON.parse(localStorage.getItem('storedInput10')) || []
};

function getLocalStorage11() {
  return JSON.parse(localStorage.getItem('storedInput11')) || []
};

function getLocalStorage12() {
  return JSON.parse(localStorage.getItem('storedInput12')) || []
};

function getLocalStorage13() {
  return JSON.parse(localStorage.getItem('storedInput13')) || []
};

function getLocalStorage14() {
  return JSON.parse(localStorage.getItem('storedInput14')) || []
};

function getLocalStorage15() {
  return JSON.parse(localStorage.getItem('storedInput15')) || []
};

function getLocalStorage16() {
  return JSON.parse(localStorage.getItem('storedInput16')) || []
};

function getLocalStorage17() {
  return JSON.parse(localStorage.getItem('storedInput17')) || []
};

function getLocalStorage18() {
  return JSON.parse(localStorage.getItem('storedInput18')) || []
};

function getLocalStorage19() {
  return JSON.parse(localStorage.getItem('storedInput19')) || []
};

function getLocalStorage20() {
  return JSON.parse(localStorage.getItem('storedInput20')) || []
};

function getLocalStorage21() {
  return JSON.parse(localStorage.getItem('storedInput21')) || []
};

function getLocalStorage22() {
  return JSON.parse(localStorage.getItem('storedInput22')) || []
};

function getLocalStorage23() {
  return JSON.parse(localStorage.getItem('storedInput23')) || []
};

function getLocalStorage24() {
  return JSON.parse(localStorage.getItem('storedInput24')) || []
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




// var currentDay = $('#currentDay');

// var storedHour = 


// var userInfo = [];
// var sortedScores = JSON.parse(localStorage.getItem("userInfo"));

// description.innerHTML = "";
// console.log(description);

// function renderList() {
//   for (var i = 0; i < renderedInput.length; i++) {
//     var name = sortedScores[i].name;
//     var highScore = sortedScores[i].highScore;
    // console.log(highScore);

//     var li = document.createElement("li");
//     li.textContent = `${name}: ${highScore}`;
//     li.setAttribute("data-index", i);

//     highScoreList.appendChild(li);
//   }
// };

// function init() {
//   var renderedInput = JSON.parse(localStorage.getItem("storedInput"));
//   console.log(renderedInput);

//   if (storedInput !== null) {
//     renderedInput = storedInput;
//   }
//   console.log(userInfo);

//   renderList();
// };

// init();


// SAVE ACTIVITY BUTTON                   
// `saveBtn.addEventListener("click", function(event) {
//   event.preventDefault();
  
//   storeInput();
// });`

// STORE THE ACTIVITY AND TIME OF ACTIVITY IN LOCALSTORAGE
// function getLocalStorage1() {
//   return JSON.parse(localStorage.getItem('storedInput1')) || []
// };

// function storeInput(userInput) {
//   var storedInput = getLocalStorage();
//   var itemTime = currentTime;
//   var userInput = {
//     item: description,
//     itemTime: itemTime
//   };
  
//   console.log(storedInput);
//   console.log(userInput);
//   storedInput.push(userInput);

//   localStorage.setItem('storedInput', JSON.stringify(storedInput));
// };



function storeInput(userInput) {
  var storedInput = getLocalStorage();
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



function storeInput(userInput) {
  var storedInput = getLocalStorage();
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



function storeInput(userInput) {
  var storedInput = getLocalStorage();
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



function storeInput(userInput) {
  var storedInput = getLocalStorage();
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



function storeInput(userInput) {
  var storedInput = getLocalStorage();
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



function storeInput(userInput) {
  var storedInput = getLocalStorage();
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



function storeInput(userInput) {
  var storedInput = getLocalStorage();
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



function storeInput(userInput) {
  var storedInput = getLocalStorage();
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

function getLocalStorage1() {
  return JSON.parse(localStorage.getItem('storedInput10')) || []
};

function storeInput(userInput) {
  var storedInput = getLocalStorage();
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
// still need to render items on page on load, in correct locations

// TIME DISPLAY FUNCTION
function timeDisplay() {
  setInterval(function() {
    currentTime = dayjs().format('HH:00:00');
    $('#currentDay').text(today.format('dddd'));
    // var time = dayjs().format('dddd MMM, YYYY [-] h:mm:ss a');
    // $('#currentDay').text(time);
  }, 1000);
};

timeDisplay();
displayItem();

// military time...24 hrs










// user enters in the event, the computer logs the event and the time stamp in local Storage
// so we have an object created for every FileSystemEntry, containing the text value and the timestamp value on button click

// three different time classes, past, present, future.  all with different stylings.
// what about pulling the time in hours and changin ghte time to a number string and then comparing with a certain other number.  ie  var timeCheck = dayjs().format(hh).
// Number(timeCheck)
// if timeCheck < 8, execute class change.

// or if |currentTime - timeCheck| > 24, execute command
// else if |currentTime -timeCheck| <== 24 && > 12, execute change
// etc

// give each event a time stamp to store along with the value so that when it's pulled back up, it knows when it was logged, and can change color accordingly


// function displayItem() {
//   // console.log("item showed");
//     description.textContent = storedInput[currentItem].item;
//     questionBody.innerHTML = `<li>${quiz[currentQuestion].answers[0]}</li><li>${quiz[currentQuestion].answers[1]}</li><li>${quiz[currentQuestion].answers[2]}</li><li>${quiz[currentQuestion].answers[3]}</li><li>${quiz[currentQuestion].answers[4]}</li>`;
// };


// function setColor( {
//   timeText.each(function ( {
//     currentTime = parseInt(dayjs().format('h'));

//     var blockTimeViaCustomDataAttr =$(this).attr('data-hour');
//     blockTime = $(this).attr('id').split('_')[1
//     blockTime = parseInt(dayjs(.format('h';)))]
//   }))
// })

// if (currentTime < blockTimeVia) {
//   $(this).removeClass('past present');
//   $(this).addClass('future');

// } else if (currentTime === blackTime)
// }

// else{stuff's going wrong}


// dayjs go to military time for 24 hr cllcok


//  function getLocalStorage() {
//     return JSON.parse(localStorage.getItem('userInfo')) || []
//   };
  
//   function storeScore(userStat) {
//     var userInfo = getLocalStorage();
//     var userStat = {
//       name: nameInput.value.trim(),
//       highScore: scoreCount
//     };
    
//     // console.log(userInfo);
//     userInfo.push(userStat);
  
//     var sortedScores = userInfo.sort(function(a, b) {
//       return b.highScore - a.highScore;
//     })
//     if (sortedScores.length > 10) {
//       sortedScores.pop();
//     };
  
//     localStorage.setItem('userInfo', JSON.stringify(sortedScores));
//   };


// signNameButton.addEventListener("click", function(event) {
//   event.preventDefault();
  
//   storeScore();
// });


// if (currentHour === itemHour) {
//   // color is blue
//   else if (currentHour > itemHour)
// }