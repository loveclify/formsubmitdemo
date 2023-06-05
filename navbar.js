
// Hamburger Manu toggle
var topnav = document.querySelector('.topnav');
var topnavBtn = document.querySelector('.topnav button');

topnavBtn.addEventListener('click', ()=>{
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
