var getMovies = function() {
    // The Movie Database API Link
    // Link pulls response in json in placed into browser directly
    // Still working on having the data show in console.log
    // Documentation URL: https://developers.themoviedb.org/3/getting-started/search-and-query-for-details
    var apiUrl = "https://api.themoviedb.org/3/search/movie?api_key=f7d85a51bfa2246df462b8756b8f2df8&query=Jack+Reacher";

    // Make a Request to the API Link
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        })
    })
}

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

