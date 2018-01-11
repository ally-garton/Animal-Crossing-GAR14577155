window.onload = function() {
    init();
}

// init() function runs as soon as page is loaded
// calls timeColour() as this is required to set background colour on each page
function init() {
    console.log("init fired");
    timeColour();
}

// to match the game the website is designed for, 
// the system uses the clock to determine the colour of the 'sky' (background)
function timeColour() {
	// between 6am and 5pm the sky is light blue
    var currentHour = new Date().getHours();
    if (currentHour >=6 && currentHour <= 17) {
        document.body.className = "day";
    }
	
	// between 6pm and 8pm the sky is orange
    else if (currentHour >= 18 && currentHour <= 20) {
        document.body.className = "evening";
    }

	// between 9pm and 5am the sky is dark blue
    else {
        document.body.className = "night";
    }
}

//home page scripts

var currentSlide = 0;
$(function(){
	// if statement to ensure the code is only run on the homepage
    if($("body").is(".home")){
		// passive slideshow changes image every 4 seconds
        var slideInterval = setInterval(nextSlide, 4000);
    }
});

// nextSlide() calculates which slide is the next in the sequence
// it assigns this slide the class name "current slide"
// the image which has this class name is the one which is set to be visible
function nextSlide() {
    var slides = document.querySelectorAll("#slides .slide");
    slides[currentSlide].className = "slide";
    currentSlide = (currentSlide+1) % slides.length;
    slides[currentSlide].className = "current slide";
}


//titles page scripts

// this function uses a jQuery library to put a flip effect on images when they are clicked
$( document ).ready(function() {
    console.log("ready!"); 
	
    $(".gameboxes").flip();
    $(".imgholder").flip();
	
}); 


//amiibo figures scripts

// this function creates a pop up box when the user clicks on a link to an external site
$( document ).ready(function() {
    console.log("ready!"); 
	
	// the links are given the class "overlay_trigger"
	// when the link is clicked, the pop up box appears
	// additionally, a grey overlay appears so the user must close the pop up to continue using the site
    $(".overlay_trigger").click(function(){
        $(".overlay").show();
        $(".overlay_grey").show();
    });
	
	// the close button hides the pop up box and the grey overlay
    $(".close").click(function(){
        $(".overlay").hide();
        $(".overlay_grey").hide();
    });
}); 

//create page scripts

// this function makes icons on the customiser draggable so users can design their own cover plates
$( document ).ready(function() {
    console.log("ready!"); 
	
	// the jQuery draggable library means users can drag images around the page
	// 'containment' means users can only drag the icons in the div called "droppable"
    $(".draggable").draggable({containment: "#droppable"});

});

// this function currently only has purpose in Firefox
// uses the html2canvas library to snapshot the user's design
function capture() {
	// the div it snapshots is called "target"
    $("#target").html2canvas({
        onrendered: function(canvas) {
            var img = canvas.toDataURL();
			// one the snapshot has been rendered, it is opened in a new tab
            window.open(img);
        }
})};

//clickCounter() makes use of local storage
function clickCounter() {
	// checks to see if local storage is supported on the user's browser
    if(typeof(Storage) !== "undefined") {
		// if the clickcount has already been created, its total is incremented
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        }

		// if not, it is set to one click
        else {
            localStorage.clickcount = 1;
        }
		
		// the number of times the user has clicked this button
		// also known as "created cover plates"
		// is then output to the DOM
        document.getElementById("click_counter").innerHTML = "You have created " + localStorage.clickcount + " cover plate(s).";
    } 
	
	// if the user's browser does not support local storage, they are informed of this
    else {
        document.getElementById("click_counter").innerHTML = "Sorry! Your browser does not support local storage.";
    }
}
