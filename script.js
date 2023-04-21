// var startProductBarPos = -1;
// window.onscroll = function () {
//   var bar = document.getElementById("sticky");
//   if (startProductBarPos < 0) startProductBarPos = findPosY(bar);

//   if (pageYOffset > startProductBarPos) {
//     bar.style.position = "fixed";
//     bar.style.top = 0;
//   } else {
//     bar.style.position = "absolute";
//   }
// };

var startProductBarPos = -1;
window.onscroll = function () {
  var bar = document.getElementById("sticky");
  if (startProductBarPos < 0) {
    startProductBarPos = bar.getBoundingClientRect().top + window.pageYOffset;
  }
  if (window.pageYOffset > startProductBarPos) {
    bar.style.position = "fixed";
    bar.style.top = 0;
  } else {
    bar.style.position = "absolute";
    bar.style.top = "";
  }
};

function findPosY(obj) {
  var curtop = 0;
  if (obj.offsetParent !== null) {
    while (obj.offsetParent) {
      curtop += obj.offsetTop;
      obj = obj.offsetParent;
    }
    curtop += obj.offsetTop;
  } else {
    curtop += obj.getBoundingClientRect().top;
  }
  return curtop;
}

// function findPosY(obj) {
//   var curtop = 0;
//   if (typeof obj.offsetParent != "undefined" && obj.offsetParent) {
//     while (obj.offsetParent) {
//       curtop += obj.offsetTop;
//       obj = obj.offsetParent;
//     }
//     curtop += obj.offsetTop;
//   } else if (obj.y) curtop += obj.y;
//   return curtop;
// }

function showDropdown() {
  var dropdown = document.getElementById("myDropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    }
  }
};

// Search query
const form = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent the form from submitting

  const searchQuery = searchInput.value;
  window.location.href = "https://hotels.ng/hotels-in-" + searchQuery;
  // searchInput.value = "";
});
