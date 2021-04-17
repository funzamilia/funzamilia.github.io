$(document).on('keydown', function() {
    $("#titleSong")[0].play();
});
$(document).ready(function() {
    $(".crawl").bind('oanimationend animationend webkitAnimationEnd', function() {
        window.location.replace("game.html");
    });
});