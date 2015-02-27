$(document).ready(function(){

  $('#bdNavItem').hover(
    function() {
      $(this).replaceWith('<li id="bdPic" a href="http://en.wikipedia.org/wiki/Bulldog"> <img src="http://i.imgur.com/S55TFVC.png"> </img> </a> </li> ');
    }, function() {
      $(this).replaceWith('<li id="bdNavItem"> <a href="http://en.wikipedia.org/wiki/Bulldog"> Bulldogs </a> </li>');
);

});
