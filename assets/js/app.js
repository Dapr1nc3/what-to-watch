var header = document.getElementById("topPage");
var getName = document.createElement("p");
var saveButton = document.getElementById("saveBtn");
var theClose = document.getElementById("close");
var theInput = document.getElementById("input");
var theOr = document.getElementById("theOr");
var thePrompt = document.getElementById("promptChange");
var nameIn = document.getElementById("nameIn");
$("#saveBtn").click(function() {

    if (header.firstChild) {
        header.removeChild(header.firstChild)
    }
    if (nameIn.value !== null) {
        var nameout = nameIn.value;
        getName.innerHTML = "Welcome " + nameout + "!"
            //  getName.innerHTML = "welcome " + nameout + "!"
        console.log(getName);
        header.appendChild(getName)
        saveName()
        $(".modal").removeClass("is-active")
        console.log("ran from 1");
        thePrompt.innerText = ("You are changing your name, if not click ' Find Me a Movie ' or X")
        theOr.classList.remove("hide")
        theClose.classList.remove("hide")
        theInput.classList.remove("hide")
    } else {
        console.log("ran from 2");
        $(".modal").addClass("is-active");
    }
});
$("#nameChangeBtn").click(function() {
    $(".modal").addClass("is-active");
    // nameIn = (input => input.value = '')
    // nameIn.value = ''
})
$("#input").click(function() {
    if ((nameIn.value.length !== 0 || loadSaveName) && nameIn.value !== "") {
        $(".modal").removeClass("is-active");
    }
});
$("#close").click(function() {
    if ((nameIn.value.length !== 0 || loadSaveName) && nameIn.value !== "") {
        $(".modal").removeClass("is-active");
    }
});

// if (loadSaveName) {
//     var getName = document.createElement("p");
//     nameIn = localStorage.getItem('saveName');
//     // nameIn = nameIn.toUpperCase
//     nameIn = JSON.parse(nameIn)
//     getName.innerText = "Welcome back " + nameIn
//     header.appendChild(getName);
//     theOr.classList.remove("hide");
//     theClose.classList.remove("hide");
//     theInput.classList.remove("hide");
//     $(".modal").removeClass("is-active");
// } else {
//     $(".modal").addClass("is-active");
// }
if (loadSaveName) {
    loadSaveName()
}

function saveName() {
    localStorage.setItem("saveName", JSON.stringify(nameIn.value));
}
var savedName;

function loadSaveName() {
    savedName = localStorage.getItem("saveName");
    if ((savedName == null)) {
        // $(".modal").addClass("is-active");
        return false
    } else {
        var getName = document.createElement("p");
        savedName = localStorage.getItem("saveName");
        savedName = JSON.parse(savedName)
        getName.innerText = "Welcome back " + savedName + "!";
        header.appendChild(getName);
        $(".modal").removeClass("is-active");
        theOr.classList.remove("hide");
        theClose.classList.remove("hide");
        theInput.classList.remove("hide");
        return true;
    }
}



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



function renderGenere(data) {
    console.log(data);
}


function fetchMoviesForGenere(genreId) {
    // API JSON function
    fetch("https://watchmode.p.rapidapi.com/list-titles/?types=movie%2Ctv_series&regions=US&source_types=sub%2Cfree&source_ids=23%2C206&page=1&limit=250&genres=" + genreId, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "watchmode.p.rapidapi.com",
                "x-rapidapi-key": "a9b8fff142msh5582687a3270a71p1d0bc9jsn84d0aac2edea"
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
            const titles = data.titles;

            titles.forEach(title => {
                $(".hero-body > .container").append(`<p>${title.title}</p>`)
            });
        })
        .catch(err => {
            console.error(err);
        });
}




// Initialize all div with carousel class
var carousels = bulmaCarousel.attach('.carousel');

// Loop on each carousel initialized
for (var i = 0; i < carousels.length; i++) {
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
    document.button.classList.toggle('dark-theme');
});

hamburgerMenu();

function hamburgerMenu() {
    var burger = document.querySelector(".burger")
    var nav = document.querySelector("#" + burger.dataset.target)
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        nav.classList.toggle('is-active')
    })
}


// Mya navbar javascript end


// Devin card section 


// API JSON function for Jack Reacher
$.getJSON("https://api.themoviedb.org/3/search/movie?api_key=f7d85a51bfa2246df462b8756b8f2df8&query=Jack+Reacher", function(movieData) {
    console.log(movieData)

    // API var video img display for hero
    var imgHero1 = "http://image.tmdb.org/t/p/w500/gE8Dow9HTVYLQkRRik72o9iv9xw.jpg";

    // API var video title display for hero
    var imgHeroTitle1 = movieData.results[0].title;

    // function that allows the imgs to be shown on hero 

    $('#img_Hero1').attr('src', imgHero1);

    // function that allows API video img to show on hero

    $('#imghero-title1').show(function() {
        $(this).html(imgHeroTitle1);
    })

});


// API JSON function for Predator
$.getJSON("https://api.themoviedb.org/3/search/movie?api_key=f7d85a51bfa2246df462b8756b8f2df8&query=Predator", function(movieDataTwo) {
    console.log(movieDataTwo)

    // API var video img display for hero
    var imgHero2 = "/x6aNbv9hCgBolIbnwlocwzhS9Eq.jpg";

    // API var video title display for hero
    var imgHeroTitle2 = movieDataTwo.results[0].original_title;

    // function that allows the imgs to be shown on hero 

    $('#img_Hero2').attr('src', imgHero2);

    // function that allows API video img to show on hero

    $('#imghero-title2').show(function() {
        $(this).html(imgHeroTitle2);
    })

});


// API JSON function for Independence Day
$.getJSON("https://api.themoviedb.org/3/search/movie?api_key=f7d85a51bfa2246df462b8756b8f2df8&query=Independence+Day", function(movieDataThree) {
    console.log(movieDataThree)

    // API var video img display for hero
    var imgHero3 = "/uw4SnKFZ453Gxmj5XR5Susj8TNo.jpg";

    // API var video title display for hero
    var imgHeroTitle3 = movieDataThree.results[0].original_title;

    // function that allows the imgs to be shown on hero 

    $('#img_Hero3').attr('src', imgHero3);

    // function that allows API video img to show on hero

    $('#imghero-title3').show(function() {
        $(this).html(imgHeroTitle3);
    })

});



// API JSON function for Onward
$.getJSON("https://api.themoviedb.org/3/search/movie?api_key=f7d85a51bfa2246df462b8756b8f2df8&query=Onward", function(movieDataFour) {
    console.log(movieDataFour)

    // API var video img display for hero
    var imgHero4 = "/xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg";

    // API var video title display for hero
    var imgHeroTitle4 = movieDataFour.results[0].original_title;

    // function that allows the imgs to be shown on hero 

    $('#img_Hero4').attr('src', imgHero4);

    // function that allows API video img to show on hero

    $('#imghero-title4').show(function() {
        $(this).html(imgHeroTitle4);
    })

});


// API JSON function for My Spy
$.getJSON("https://api.themoviedb.org/3/search/movie?api_key=f7d85a51bfa2246df462b8756b8f2df8&query=My+Spy", function(movieDataFive) {
    console.log(movieDataFive)

    // API var video img display for hero
    var imgHero5 = "/4xIBM8RwIvpwMlJSoF6tqFOaB6N.jpg";

    // API var video title display for hero
    var imgHeroTitle5 = movieDataFive.results[0].original_title;

    // function that allows the imgs to be shown on hero 

    $('#img_Hero5').attr('src', imgHero5);

    // function that allows API video img to show on hero

    $('#imghero-title5').show(function() {
        $(this).html(imgHeroTitle5);
    })

});



// API JSON function for Free Guy
$.getJSON("https://api.themoviedb.org/3/search/movie?api_key=f7d85a51bfa2246df462b8756b8f2df8&query=Free+Guy", function(movieDataSix) {
    console.log(movieDataSix)

    // API var video img display for hero
    var imgHero6 = "/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg";

    // API var video title display for hero
    var imgHeroTitle6 = movieDataSix.results[0].original_title;

    // function that allows the imgs to be shown on hero 

    $('#img_Hero6').attr('src', imgHero6);

    // function that allows API video img to show on hero

    $('#imghero-title6').show(function() {
        $(this).html(imgHeroTitle6);
    })

});



// API JSON function for Wrong Turn
$.getJSON("https://api.themoviedb.org/3/search/movie?api_key=f7d85a51bfa2246df462b8756b8f2df8&query=Wrong+Turn", function(movieDataSeven) {
    console.log(movieDataSeven)

    // API var video img display for hero
    var imgHero7 = "/6XVqVAMOsKL5C26pHesiAawuGYW.jpg";

    // API var video title display for hero
    var imgHeroTitle7 = movieDataSeven.results[0].original_title;

    // function that allows the imgs to be shown on hero 

    $('#img_Hero7').attr('src', imgHero7);

    // function that allows API video img to show on hero

    $('#imghero-title7').show(function() {
        $(this).html(imgHeroTitle7);
    })

});



// API JSON function for Spiral
$.getJSON("https://api.themoviedb.org/3/search/movie?api_key=f7d85a51bfa2246df462b8756b8f2df8&query=Spiral", function(movieDataEight) {
    console.log(movieDataEight)

    // API var video img display for hero
    var imgHero8 = "/lcyKve7nXRFgRyms9M1bndNkKOx.jpg";

    // API var video title display for hero
    var imgHeroTitle8 = movieDataEight.results[0].original_title;

    // function that allows the imgs to be shown on hero 

    $('#img_Hero8').attr('src', imgHero8);

    // function that allows API video img to show on hero

    $('#imghero-title8').show(function() {
        $(this).html(imgHeroTitle8);
    })

});


// API JSON function for Holidate
$.getJSON("https://api.themoviedb.org/3/search/movie?api_key=f7d85a51bfa2246df462b8756b8f2df8&query=Holidate", function(movieDataNine) {
    console.log(movieDataNine)

    // API var video img display for hero
    var imgHero9 = "/lAaJc9842RDVrjvR3OLPMTeHkiA.jpg";

    // API var video title display for hero
    var imgHeroTitle9 = movieDataNine.results[0].original_title;

    // function that allows the imgs to be shown on hero 

    $('#img_Hero9').attr('src', imgHero9);

    // function that allows API video img to show on hero

    $('#imghero-title9').show(function() {
        $(this).html(imgHeroTitle9);
    })

});


// API JSON function for Last Christmas
$.getJSON("https://api.themoviedb.org/3/search/movie?api_key=f7d85a51bfa2246df462b8756b8f2df8&query=Last+Christmas", function(movieDataTen) {
    console.log(movieDataTen)

    // API var video img display for hero
    var imgHero10 = "/kDEjffiKgjuGo2DRzsqfjvW0CQh.jpg";

    // API var video title display for hero
    var imgHeroTitle10 = movieDataTen.results[0].original_title;

    // function that allows the imgs to be shown on hero 

    $('#img_Hero10').attr('src', imgHero10);

    // function that allows API video img to show on hero

    $('#imghero-title10').show(function() {
        $(this).html(imgHeroTitle10);
    })

});