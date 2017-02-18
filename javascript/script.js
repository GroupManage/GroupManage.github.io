

// Scrolling du menu
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var navbar = $("#navbar");
    var menu = $("#navbar ul");

    if (scroll >= navbar.position().top) {//scroll >= 200 &&
        menu.addClass("fixed");
        navbar.height(menu.outerHeight());
    } else {
        menu.removeClass("fixed");
    }
});

//Collapsed menu for small screen
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Ouverture de deux liens en même temps
function openlink()
{
    for(var i = 0; i < arguments.length; i++)
    {
        w1 = window.open(arguments[i]);
    }
};

// Récupération des paramètres de l'url
function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        };
    };
};
/*And this is how you can use this function assuming the URL is, http://dummy.com/?technology=jquery&blog=jquerybyexample:

var tech = GetURLParameter('technology');
var blog = GetURLParameter('blog');*/

