
// Problems
$(document).ready(function(){

    //Code Goes Here

    //Problem 1 BASIC SELECTORS
    //$('').css('', '');
    $(".lead").css("color", "orange");

    //Problem 2 INDEX FILTERS
    //$('p:gt(1)');
    $("p:gt(1)").css("border", "2px solid black");

    //Problem 3 BASIC ANIMATIONS
    //$('').slideUp(2000).delay(1000).slideDown(500);
    $('p').slideUp(2000).delay(1000).slideDown(500);

    //Problem 4
    //$("").click(function(){
    // $().hide();
    //});
    $(".box").click(function(){
       $(this).hide();
       });

    //Problem 5 ATTR METHOD
    //$('p:first').attr('', '');
   $("p:first").attr('class', 'not-lead');

    //Problem 6 IMAGE SWAP
    //
    $("img").attr("src", "img2.jpg");

    //Problem 7
    //
    $("p:first").html("<a href = 'http://www.google.com'>Google</a>");

//Problem 8
    //
    $("input").val("Please Enter Your Name")

    //Problem 9
    //$('').click(function() {
    //   $('#item1');
    //});
    $('#slideup').click(function() {
       $("#item1").slideUp();
    });

    //Problem 10
    $('#toggle').click(function() {
        $("#item1").toggle();
    });



});
/*
$(function(){

    if (document.location.host) {
        var link = document.location.href;
    } else {
        var link = "http://harlemtool.com/shake.php?url=http%3A%2F%2Fwww.slcc.edu";
    }

    cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
        window.location.replace(link);
    });


});


$(function(){
var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
$(document).keydown(function(e) {
  kkeys.push( e.keyCode );
  if ( kkeys.toString().indexOf( konami ) >= 0 ){
    $(document).unbind('keydown',arguments.callee);
    $.getScript('http://www.cornify.com/js/cornify.js',function(){
      cornify_add();
      $(document).keydown(cornify_add);
    });
  }
});
});
*/

