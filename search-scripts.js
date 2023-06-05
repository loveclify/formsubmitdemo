window.onload = function() {
  const searchButton = document.getElementById('search-button');
  const locationInput = document.getElementById('location-input');

  // Function to handle the search submission
  function submitSearch() {
    const location = locationInput.value;
    const url = `https://www.google.com/maps/search/hiking+trails+and+campsites+near+${location}/@${location},50mi`;
    window.open(url, '_blank');
  }

  // Event listener for clicking the search button
  searchButton.addEventListener('click', function() {
    submitSearch();
  });

  // Event listener for pressing the Enter key
  locationInput.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      submitSearch();
    }
  });
};

// navbar

var topnav = document.querySelector('.topnav');
var topnavBtn = document.querySelector('.topnav button');

topnavBtn.addEventListener('click', () =>{
    topnav.classList.toggle('open')
})

// Preventing the hamburger menu to trigger when resizing
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.   body.classList.remove("resize-animation-stopper");
  }, 400);
});

