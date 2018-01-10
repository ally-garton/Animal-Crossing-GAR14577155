window.onload = function() {
	init();
}

function init() {
	console.log('init fired');
	timeColour();
}

function timeColour() {
	var currentHour = new Date().getHours();
	if (currentHour >=6 && currentHour <= 17) {
		document.body.className = "day";
	}

	else if (currentHour >= 18 && currentHour <= 20) {
		document.body.className = "evening";
	}

	else {
		document.body.className = "night";
	}
}

//home page scripts

var currentSlide = 0;
$(function(){
	if($('body').is('.home')){
	var slideInterval = setInterval(nextSlide, 4000);
  }
});

function nextSlide() {
	var slides = document.querySelectorAll('#slides .slide');
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1) % slides.length;
    slides[currentSlide].className = 'current slide';
}


//titles page scripts

$( document ).ready(function() {
	console.log( "ready!" ); 
	
	$(".gameboxes").flip();
	$(".imgholder").flip();
	
}); 


//amiibo figures scripts

$( document ).ready(function() {
	console.log( "ready!" ); 
	
	$(".overlay_trigger").click(function(){
		$(".overlay").show();
		$(".overlay_grey").show();
	});
	
    $(".close").click(function(){
        $(".overlay").hide();
		$(".overlay_grey").hide();
    });
}); 

//create page scripts

$( document ).ready(function() {
	console.log( "ready!" ); 
	
	$(".draggable").draggable({containment: "#droppable"});

});

function capture() {
	$('#target').html2canvas({
		onrendered: function(canvas) {
		var img = canvas.toDataURL()
		window.open(img);
		}
})};

function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("click_counter").innerHTML = "You have created " + localStorage.clickcount + " cover plate(s).";
    } else {
        document.getElementById("click_counter").innerHTML = "Sorry, your browser does not support web storage.";
    }
}
