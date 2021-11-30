// Modal Save Button
$("#input").click(function() {

    // close modal
    $(".modal").removeClass("is-active");

    // Take the value of the input 
    var inputValue = document.getElementById("input").value

    // Save to local Storage
    localStorage.setItem("input", inputValue);
    console.log(inputValue);

  
 });

 // Modal Close Button
$("#close").click(function() {
 
    $(".modal").removeClass("is-active");
  
 });










// API JSON function for Jack Reacher
$.getJSON("https://api.themoviedb.org/3/search/movie?api_key=f7d85a51bfa2246df462b8756b8f2df8&query=Jack+Reacher", function(movieData){
console.log(movieData)

// API var video img display for hero
var imgHero1 = "http://image.tmdb.org/t/p/w500/zlyhKMi2aLk25nOHnNm43MpZMtQ.jpg";

// API var video title display for hero
var imgHeroTitle1 = movieData.results[0].title;

// function that allows the imgs to be shown on hero 

$('#img_Hero1').attr('src', imgHero1);

// function that allows API video img to show on hero

$('#imghero-title1').show(function(){
    $(this).html(imgHeroTitle1);
})

});




// API JSON function for Predator
$.getJSON("https://api.themoviedb.org/3/search/movie?api_key=f7d85a51bfa2246df462b8756b8f2df8&query=Predator", function(movieDataTwo){
console.log(movieDataTwo)

// API var video img display for hero
var imgHero2 = "/x6aNbv9hCgBolIbnwlocwzhS9Eq.jpg";

// API var video title display for hero
var imgHeroTitle2 = movieDataTwo.results[0].original_title;

// function that allows the imgs to be shown on hero 

$('#img_Hero2').attr('src', imgHero2);

// function that allows API video img to show on hero

$('#imghero-title2').show(function(){
    $(this).html(imgHeroTitle2);
})

});


// API JSON function for Independence Day
$.getJSON("https://api.themoviedb.org/3/search/movie?api_key=f7d85a51bfa2246df462b8756b8f2df8&query=Independence+Day", function(movieDataThree){
console.log(movieDataThree)

// API var video img display for hero
var imgHero3 = "/uw4SnKFZ453Gxmj5XR5Susj8TNo.jpg";

// API var video title display for hero
var imgHeroTitle3 = movieDataThree.results[0].original_title;

// function that allows the imgs to be shown on hero 

$('#img_Hero3').attr('src', imgHero3);

// function that allows API video img to show on hero

$('#imghero-title3').show(function(){
    $(this).html(imgHeroTitle3);
})

});



// API JSON function for Onward
$.getJSON("https://api.themoviedb.org/3/search/movie?api_key=f7d85a51bfa2246df462b8756b8f2df8&query=Onward", function(movieDataFour){
console.log(movieDataFour)

// API var video img display for hero
var imgHero4 = "/xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg";

// API var video title display for hero
var imgHeroTitle4 = movieDataFour.results[0].original_title;

// function that allows the imgs to be shown on hero 

$('#img_Hero4').attr('src', imgHero4);

// function that allows API video img to show on hero

$('#imghero-title4').show(function(){
    $(this).html(imgHeroTitle4);
})

});


// API JSON function for My Spy
$.getJSON("https://api.themoviedb.org/3/search/movie?api_key=f7d85a51bfa2246df462b8756b8f2df8&query=My+Spy", function(movieDataFive){
console.log(movieDataFive)

// API var video img display for hero
var imgHero5 = "/4xIBM8RwIvpwMlJSoF6tqFOaB6N.jpg";

// API var video title display for hero
var imgHeroTitle5 = movieDataFive.results[0].original_title;

// function that allows the imgs to be shown on hero 

$('#img_Hero5').attr('src', imgHero5);

// function that allows API video img to show on hero

$('#imghero-title5').show(function(){
    $(this).html(imgHeroTitle5);
})

});



// API JSON function for Free Guy
$.getJSON("https://api.themoviedb.org/3/search/movie?api_key=f7d85a51bfa2246df462b8756b8f2df8&query=Free+Guy", function(movieDataSix){
console.log(movieDataSix)

// API var video img display for hero
var imgHero6 = "/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg";

// API var video title display for hero
var imgHeroTitle6 = movieDataSix.results[0].original_title;

// function that allows the imgs to be shown on hero 

$('#img_Hero6').attr('src', imgHero6);

// function that allows API video img to show on hero

$('#imghero-title6').show(function(){
    $(this).html(imgHeroTitle6);
})

});



// API JSON function for Wrong Turn
$.getJSON("https://api.themoviedb.org/3/search/movie?api_key=f7d85a51bfa2246df462b8756b8f2df8&query=Wrong+Turn", function(movieDataSeven){
console.log(movieDataSeven)

// API var video img display for hero
var imgHero7 = "/4U1SBHmwHkNA0eHZ2n1CuiC1K1g.jpg";

// API var video title display for hero
var imgHeroTitle7 = movieDataSeven.results[0].original_title;

// function that allows the imgs to be shown on hero 

$('#img_Hero7').attr('src', imgHero7);

// function that allows API video img to show on hero

$('#imghero-title7').show(function(){
    $(this).html(imgHeroTitle7);
})

});



// API JSON function for Spiral
$.getJSON("https://api.themoviedb.org/3/search/movie?api_key=f7d85a51bfa2246df462b8756b8f2df8&query=Spiral", function(movieDataEight){
console.log(movieDataEight)

// API var video img display for hero
var imgHero8 = "/lcyKve7nXRFgRyms9M1bndNkKOx.jpg";

// API var video title display for hero
var imgHeroTitle8 = movieDataEight.results[0].original_title;

// function that allows the imgs to be shown on hero 

$('#img_Hero8').attr('src', imgHero8);

// function that allows API video img to show on hero

$('#imghero-title8').show(function(){
    $(this).html(imgHeroTitle8);
})

});


// API JSON function for Holidate
$.getJSON("https://api.themoviedb.org/3/search/movie?api_key=f7d85a51bfa2246df462b8756b8f2df8&query=Holidate", function(movieDataNine){
console.log(movieDataNine)

// API var video img display for hero
var imgHero9 = "/lAaJc9842RDVrjvR3OLPMTeHkiA.jpg";

// API var video title display for hero
var imgHeroTitle9 = movieDataNine.results[0].original_title;

// function that allows the imgs to be shown on hero 

$('#img_Hero9').attr('src', imgHero9);

// function that allows API video img to show on hero

$('#imghero-title9').show(function(){
    $(this).html(imgHeroTitle9);
})

});


// API JSON function for Last Christmas
$.getJSON("https://api.themoviedb.org/3/search/movie?api_key=f7d85a51bfa2246df462b8756b8f2df8&query=Last+Christmas", function(movieDataTen){
console.log(movieDataTen)

// API var video img display for hero
var imgHero10 = "/kDEjffiKgjuGo2DRzsqfjvW0CQh.jpg";

// API var video title display for hero
var imgHeroTitle10 = movieDataTen.results[0].original_title;

// function that allows the imgs to be shown on hero 

$('#img_Hero10').attr('src', imgHero10);

// function that allows API video img to show on hero

$('#imghero-title10').show(function(){
    $(this).html(imgHeroTitle10);
})

});






// API JSON function
$.getJSON("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCaWd5_7JhbQBe4dknZhsHJg&maxResults=12&order=date&key=AIzaSyD3Uv-QJie0sCZFwD7hnQ7ovf6-SmqDUUI", function(data){
console.log(data);

// API var video img display links for cards 
var imgVideo1 = "https://i.ytimg.com/vi/5EMAXHLLBr4/default.jpg";
var imgVideo2 = "https://i.ytimg.com/vi/Z1N-wAvnmBo/default.jpg";
var imgVideo3 = "https://i.ytimg.com/vi/gZtE10G141U/default.jpg";
var imgVideo4 = "https://i.ytimg.com/vi/5XENv3zDCFw/default.jpg";
var imgVideo5 = "https://i.ytimg.com/vi/5EMAXHLLBr4/default.jpg";
var imgVideo6 = "https://i.ytimg.com/vi/5EMAXHLLBr4/default.jpg";
var imgVideo7 = "https://i.ytimg.com/vi/5EMAXHLLBr4/default.jpg";
var imgVideo8 = "https://i.ytimg.com/vi/5EMAXHLLBr4/default.jpg";
var imgVideo9 = "https://i.ytimg.com/vi/5EMAXHLLBr4/default.jpg";
var imgVideo10 = "https://i.ytimg.com/vi/5EMAXHLLBr4/default.jpg";
var imgVideo11 = "https://i.ytimg.com/vi/5EMAXHLLBr4/default.jpg";
var imgVideo12 = "https://i.ytimg.com/vi/5EMAXHLLBr4/default.jpg";

// API var video title display for cards
var imgVideoTitle1 = data.items[0].snippet.title;
var imgVideoTitle2 = data.items[1].snippet.title;
var imgVideoTitle3 = data.items[2].snippet.title;
var imgVideoTitle4 = data.items[3].snippet.title;
var imgVideoTitle5 = data.items[4].snippet.title;
var imgVideoTitle6 = data.items[5].snippet.title;
var imgVideoTitle7 = data.items[6].snippet.title;
var imgVideoTitle8 = data.items[7].snippet.title;
var imgVideoTitle9 = data.items[8].snippet.title;
var imgVideoTitle10 = data.items[9].snippet.title;
var imgVideoTitle11 = data.items[10].snippet.title;
var imgVideoTitle12 = data.items[11].snippet.title;


// API var video description for cards 
var videoDescription1 = data.items[0].snippet.description;
var videoDescription2 = data.items[1].snippet.description;
var videoDescription3 = data.items[2].snippet.description;
var videoDescription4 = data.items[3].snippet.description;
var videoDescription5 = data.items[4].snippet.description;
var videoDescription6 = data.items[5].snippet.description;
var videoDescription7 = data.items[6].snippet.description;
var videoDescription8 = data.items[7].snippet.description;
var videoDescription9 = data.items[8].snippet.description;
var videoDescription10 = data.items[9].snippet.description;
var videoDescription11 = data.items[10].snippet.description;
var videoDescription12 = data.items[11].snippet.description;



// function that allows the imgs to be shown on cards  
$('.img_video1').attr('src', imgVideo1);

$('.img_video2').attr('src', imgVideo2);

$('.img_video3').attr('src', imgVideo3);

$('.img_video4').attr('src', imgVideo4);


// function that allows API video title to show on cards

$('#video-title1').show(function(){
    $(this).html(imgVideoTitle1);
})

$('#video-title2').show(function(){
    $(this).html(imgVideoTitle2);
})

$('#video-title3').show(function(){
    $(this).html(imgVideoTitle3);
})

$('#video-title4').show(function(){
    $(this).html(imgVideoTitle4);
});


// function that allows API video descriptions to show on cards
$('#video-des1').show(function(){
    $(this).html(videoDescription1);
})

$('#video-des2').show(function(){
    $(this).html(videoDescription2);
})

$('#video-des3').show(function(){
    $(this).html(videoDescription3);
})

$('#video-des4').show(function(){
    $(this).html(videoDescription4);
})


});


// Brians vanilla javascript start
// var getMovies = function() {
//     // The Movie Database API Link
//     // Link pulls response in json in placed into browser directly
//     // Still working on having the data show in console.log
//     // Documentation URL: https://developers.themoviedb.org/3/getting-started/search-and-query-for-details
//     // API image documention: https://developers.themoviedb.org/3/movies/get-movie-images
//     // Sample API Movie Image Request: https://api.themoviedb.org/3/movie/550/images?/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png?api_key=f7d85a51bfa2246df462b8756b8f2df8&language=en-US
//     // Sampe API Fight Club Movie Request: https://api.themoviedb.org/3/movie/550?api_key=f7d85a51bfa2246df462b8756b8f2df8
//     var apiTmdbUrl = "https://api.themoviedb.org/3/movie/550?api_key=f7d85a51bfa2246df462b8756b8f2df8";

//     // Make a Request to the TMDb API Link
//     fetch(apiTmdbUrl).then(function(response) {
//         response.json().then(function(data) {
//             console.log(data);
//         })
//     });

//     // YouTube API documention: https://developers.google.com/youtube/v3/getting-started
//     var apiYoutubeUrl = "https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyBwjtqScAQ_N-v_ZExCLGwF7GHHh6CLfKQ";

//     // Make a Request to the YouTube API Link
//     fetch(apiYoutubeUrl).then(function(response) {
//         response.json().then(function(data) {
//             console.log(data);
//         })
//     });
// };

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