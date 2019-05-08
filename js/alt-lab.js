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


//make stuff invisible
window.onload = function(){
	const urlParams = new URLSearchParams(window.location.search);
	const show = urlParams.get('show');

	//components to hide or show
	const headerNav = document.getElementById('wrapper-navbar');
	const rightSidebar = document.getElementById('right-sidebar');
	const footer = document.getElementById('wrapper-footer');
	const adminBar = document.getElementById('wpadminbar');
	const privacy = document.getElementById('private');
	const primary = document.getElementById('primary');

	if (show === 'article') {
		headerNav.classList.add('hidden');
		rightSidebar.classList.add('hidden');
		footer.classList.add('hidden');
		adminBar.classList.add('hidden');	
		privacy.classList.add('hidden');
		primary.removeAttribute("class");
		primary.classList.add('col-md-12 content-area')
	}
}


//copy embed code button

function copyToClipboard(){
 let copyText = document.getElementById("lms-embed-code");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");
}

document.getElementById("copy-embed-button").addEventListener("click", copyToClipboard);


//preview embed option
document.getElementById("preview-embed").addEventListener("click", previewChange);

function previewChange(){
	const headerNav = document.getElementById('wrapper-navbar');
	const rightSidebar = document.getElementById('right-sidebar');
	const footer = document.getElementById('wrapper-footer');
	const adminBar = document.getElementById('wpadminbar');
	const privacy = document.getElementById('private');
	const primary = document.getElementById('primary');
	headerNav.classList.toggle('preview');
    rightSidebar.classList.toggle('preview');
	footer.classList.toggle('preview');
	adminBar.classList.toggle('preview');
	privacy.classList.toggle('preview');
		

}


