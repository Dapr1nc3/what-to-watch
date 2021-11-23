var getMovies = function() {
    // The Movie Database API Link
    // Link pulls response in json in placed into browser directly
    // Still working on having the data show in console.log
    // Documentation URL: https://developers.themoviedb.org/3/getting-started/search-and-query-for-details
    // API image documention: https://developers.themoviedb.org/3/movies/get-movie-images
    var apiTmdbUrl = "https://api.themoviedb.org/3/search/movie?api_key=f7d85a51bfa2246df462b8756b8f2df8&query=Jack+Reacher";

    // Make a Request to the TMDb API Link
    fetch(apiTmdbUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        })
    });

    // YouTube API documention: https://developers.google.com/youtube/v3/getting-started
    var apiYoutubeUrl = "https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyBwjtqScAQ_N-v_ZExCLGwF7GHHh6CLfKQ";

    // Make a Request to the YouTube API Link
    fetch(apiYoutubeUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        })
    });
};

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

