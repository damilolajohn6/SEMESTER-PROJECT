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
