// Modal Save
$("#save").click(function(inputName) {

    // Take the value of the input 
var inputValue = document.getElementById("input").value

// Save to local Storage
localStorage.setItem("input", inputValue );

// Retrive from local Storage
var valueFromStorage = localStorage.getItem("input")

// Identify your submit button and your text area for your header :
// <p id="heading-title"></p>

// Then get the click event for that button and perform your DOM update.
var submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(e) {
   document.getElementById("heading-title").innerHTML = valueFromStorage;
})
    // close modal
    $(".modal").removeClass("is-active");
  
 });

 // Modal Close
$("#close").click(function() {
 
    $(".modal").removeClass("is-active");
  
 });





// API JSON function
fetch("https://watchmode.p.rapidapi.com/list-titles/?types=movie%2Ctv_series&regions=US&source_types=sub%2Cfree&source_ids=23%2C206&page=1&limit=250&genres=4%2C9", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "watchmode.p.rapidapi.com",
		"x-rapidapi-key": "a4969a72c6msh509f57706776649p1b72f3jsn51889661541a"
	}
})
.then(response => {
    if (!response.ok) {
        throw Error("ERROR");
    }
    return response.json();
})
.then(data => {
console.log(data);
})
.catch(err => {
	console.error(err);
});


// 2nd API 
fetch("https://watchmode.p.rapidapi.com/genres/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "watchmode.p.rapidapi.com",
		"x-rapidapi-key": "a4969a72c6msh509f57706776649p1b72f3jsn51889661541a"
	}
})
.then(response => {
    if (!response.ok) {
        throw Error("ERROR");
    }
    return response.json();
})
.then(data => {
console.log(data);
})
.catch(err => {
	console.error(err);
});







    



// Initialize all div with carousel class
var carousels = bulmaCarousel.attach('.carousel');

// Loop on each carousel initialized
for(var i = 0; i < carousels.length; i++) {
	// Add listener to  event
	carousels[i].on('before:show', state => {
		console.log(state);
	});
}

// Access to bulmaCarousel instance of an element
var element = document.querySelector('#carousel-demo');
if (element && element.bulmaCarousel) {
	// bulmaCarousel instance is available as element.bulmaCarousel
	element.bulmaCarousel.on('before-show', function(state) {
		console.log(state);
	});
}

bulmaCarousel.attach('#carousel-demo', {
    slidesToScroll: 1,
    slidesToShow: 1,
    navigationKeys: true,
    

});









// Mya navbar javascript start

var chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark-theme');
});

hamburgerMenu();

function hamburgerMenu() {
    var burger = document.querySelector(".burger")
    var nav = document.querySelector("#"+burger.dataset.target)
    burger.addEventListener('click', function(){
        burger.classList.toggle('is-active');
        nav.classList.toggle('is-active')
    })
}







// Mya navbar javascript end


// Devin card section 
