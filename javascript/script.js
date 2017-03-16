
// Scrolling du menu
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var navbar = $("#navbar");
    var menu = $("#myTopnav");

    if (scroll >= navbar.position().top) {//scroll >= 200 &&
        menu.removeClass("relative");
        menu.addClass("fixed");
        navbar.height(menu.outerHeight());

    } else {
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

//Création de la boite modal au clic sur une image
{
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = $("img:not(.noModal)");//document.images;//document.querySelector("img:not(.noModal)");
    console.log(img);
    var modalImg = document.getElementById("img01");
    var titleText = document.getElementById("title");
    var captionText = document.getElementById("caption");

    for(var i=0; i<img.length; i++){
        img[i].onclick = function(){
            modal.style.display = "block";
            modalImg.src = $(this).attr("src");
            modalImg.alt = $(this).attr("alt");
            modalImg.title = $(this).attr("title");
            titleText.innerHTML = $(this).attr("alt");
            captionText.innerHTML = $(this).attr("title");
        }
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}
