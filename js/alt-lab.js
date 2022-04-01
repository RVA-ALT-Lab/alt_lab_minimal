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


//build embed code

//<iframe frameborder='0' scrolling='no' width='100%' height='auto' src='<?php echo get_permalink();?>?show=article'></iframe>
//<script async src='https://rampages.us/extras/js/set-iframe-height-parent-min.js'></script>

// let main = document.getElementById('primary');
// if(main.clientHeight){
// 	let iframeHeight = main.clientHeight;
// } else {
// 	let iframeHeight = '500'
// }

let embedHolder = document.getElementById('lms-embed-code');
console.log(embedHolder)
const currentURL = window.location.href;

const embedOne =`<iframe frameborder='0' scrolling='no' width='100%' style='min-height:500px;' src='${currentURL}?show=article'></iframe>`;

const embedTwo ="src='"+currentURL+"?show=article'></iframe><script async src='https://rampages.us/extras/js/set-iframe-height-parent-min.js'></script>";
//embedHolder.value = embedOne;


//make stuff invisible
window.onload = function(){
	const urlParams = new URLSearchParams(window.location.search);
	const show = urlParams.get('show');

	//components to hide or show
	const headerNav = document.getElementById('wrapper-navbar');
	//const rightSidebar = document.getElementById('right-sidebar');
	const footer = document.getElementById('wrapper-footer');
	const adminBar = document.getElementById('wpadminbar');
	const privacy = document.getElementById('private');
	const primary = document.getElementById('primary');
	const iframeEmbed = document.querySelector('.embed-tools');
	const aTitle = document.querySelector('.navbar-brand');
	console.log(show)
	if (show === 'article') {
		headerNav.classList.add('hidden');
		//rightSidebar.classList.add('hidden');
		footer.classList.add('hidden');
		adminBar.classList.add('hidden');	
		privacy.classList.add('hidden');
		iframeEmbed.classList.add('hidden');
		primary.className = '';
		primary.classList.add('col-md-12', 'content-area');
	}
	if (show === 'map'){
		console.log('map')
		headerNav.classList.add('hidden');
		//rightSidebar.classList.add('hidden');
		footer.classList.add('hidden');
		adminBar.classList.add('hidden');	
		//privacy.classList.add('hidden');
		iframeEmbed.classList.add('hidden');
		aTitle.classList.add('hidden');
	}
}


//copy embed code button

function copyToClipboard(){
 let copyText = document.getElementById("lms-embed-code");
  copyText.select();
  document.execCommand("copy");
}
//document.getElementById("copy-embed-button").addEventListener("click", copyToClipboard);


//preview embed 
//document.getElementById("preview-embed").addEventListener("click", previewChange);

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


