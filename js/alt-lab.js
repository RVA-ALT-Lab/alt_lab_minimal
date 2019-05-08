//ALT LAB STUFF

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("wrapper-navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop+60;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


console.log(document.getElementsByTagName('article')[0].id)
console.log(document.getElementsByTagName('article')[0].offsetHeight)

const urlParams = new URLSearchParams(window.location.search);
const show = urlParams.get('show');

//components to hide or show
const headerNav = document.getElementById('wrapper-navbar');
const rightSidebar = document.getElementById('right-sidebar');
const footer = document.getElementById('wrapper-footer');
const adminBar = document.getElementById('wpadminbar');

if (show === 'article') {
	headerNav.classList.add('hidden');
	rightSidebar.classList.add('hidden');
	footer.classList.add('hidden');
	adminBar.classList.add('hidden');	
}
