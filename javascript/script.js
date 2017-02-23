// Scrolling du menu
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var navbar = $("#navbar");
    var menu = $("#myTopnav");

    if (scroll >= navbar.position().top) {
        menu.removeClass("relative");
        menu.addClass("fixed");
        navbar.height(menu.outerHeight());
    }
    else {
        menu.removeClass("fixed");
    }
});

//Collapsed menu for small screen
function displayMenu() {
    $("#myTopnav").toggleClass("responsive");
    if(!$("#myTopnav").hasClass("fixed")){
        $("#myTopnav").addClass("relative");
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

{
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.images;
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    for(var i=0; i<img.length; i++){
        img[i].onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            modalImg.title = this.title;
            captionText.innerHTML = this.alt;
        }
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}
