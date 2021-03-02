$(document).on('keydown', function() {
    $("#titleSong")[0].play();
});
$(document).ready(function() {
    $("#firstChoice, #secondChoice").click(function() {
        $("#gameBody").css("backgroundImage", "url(images/city.jpg)");
    });
});