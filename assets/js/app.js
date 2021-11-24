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

