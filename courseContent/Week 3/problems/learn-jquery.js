
// Problems
$(document).ready(function(){

    //Code Goes Here

	//Problem 1 BASIC SELECTORS
    //$('').css('', '');

    //Problem 2 INDEX FILTERS
    //$('p:gt(1)').css('', '4px solid red');

    //Problem 3 BASIC ANIMATIONS
    //$('').slideUp(2000).delay(1000).slideDown(500);


    //Problem 4
    //$("").click(function(){
    // $(this).hide();
    //});

    //Problem 5 ATTR METHOD
    //$('p:first').attr('class', '');

    //Problem 6 IMAGE SWAP
    //$('#lesson-1 img').attr('src', 'img2.jpg');

    //Problem 7
    //$('p:first').html('');

    //Problem 8
    //$('input').val('');

    //Problem 9
    //$('').click(function() {
    //   $('#item1');
    //});

    //Problem 10
    //$('').click(function() {
    //    $('#item1');
    //});


});

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

/*
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











