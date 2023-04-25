function showDropdown() {
  var dropdown = document.getElementById("myDropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    }
  }
};

const form = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const searchQuery = searchInput.value;
  window.location.href = "https://hotels.ng/hotels-in-" + searchQuery;
});
