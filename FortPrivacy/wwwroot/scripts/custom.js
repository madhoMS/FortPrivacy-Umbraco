var a = 0;
$(window).scroll(function() {
  var oTop = $('#countsection').offset().top - window.innerHeight;
  if($(window).scrollTop() < oTop){
      a=0;
  }
  if (a == 0 && $(window).scrollTop() > oTop) {
     $('.number-diy').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    a = 1;
  }
});


var pic = new Image();
var pic1 = new Image();
var pic2 = new Image();
var pic3 = new Image();
var pic4 = new Image();
var pic5 = new Image();
var pic6 = new Image();
var pic7 = new Image();
var pic8 = new Image();
var pic9 = new Image();
var pic10 = new Image();
pic.src = "/img/fort-privacy-00.png";
pic1.src = "/img/fort-privacy-01.png";
pic2.src = "/img/fort-privacy-02.png";
pic3.src = "/img/fort-privacy-03.png";
pic4.src = "/img/fort-privacy-04.png";
pic5.src = "/img/fort-privacy-05.png";
pic6.src = "/img/fort-privacy-06.png";
pic7.src = "/img/fort-privacy-07.png";
pic8.src = "/img/fort-privacy-08.png";
pic9.src = "/img/fort-privacy-09.png";
pic10.src = "/img/fort-privacy-10.png";

$(".main_casestudies > div")
    .mouseover(function () {
        $(".main_casestudies").addClass($(this).attr("class") + "_hover");
    })
    .mouseout(function () {
        $(".main_casestudies").removeClass($(this).attr("class") + "_hover");
    });

var counta = 0;
$(".main_casestudies > div").click(function () {

   

    $("#cstab1").hide();
    $("#cstab2").hide();
    $("#cstab3").hide();
    $("#cstab4").hide();
    $("#cstab5").hide();
    $("#cstab6").hide();
    $("#cstab7").hide();
    $("#cstab8").hide();
    $("#cstab9").hide();
    $("#cstab10").hide();
    
    $("#artcstab1").hide();
    $("#artcstab2").hide();
    $("#artcstab3").hide();
    $("#artcstab4").hide();
    $("#artcstab5").hide();
    $("#artcstab6").hide();
    $("#artcstab7").hide();
    $("#artcstab8").hide();
    $("#artcstab9").hide();
    $("#artcstab10").hide();
    
    
    $("#detcstab1").hide();
    $("#detcstab2").hide();
    $("#detcstab3").hide();
    $("#detcstab4").hide();
    $("#detcstab5").hide();
    $("#detcstab6").hide();
    $("#detcstab7").hide();
    $("#detcstab8").hide();
    $("#detcstab9").hide();
    $("#detcstab10").hide();
    
    
    console.log(('#cstab' + (parseInt($(this).attr("class").replace("main_casestudies_", "")) + 1)));
    $('#cstab' + (parseInt($(this).attr("class").replace("main_casestudies_", "")) + 1)).show();

$('#artcstab' + (parseInt($(this).attr("class").replace("main_casestudies_", "")) + 1)).show();

$('#detcstab' + (parseInt($(this).attr("class").replace("main_casestudies_", "")) + 1)).show();

    if ($(this).attr("data-url") != undefined) {
        location.href = $(this).attr("data-url");
    }
    
    var target = $("#homesection7");
   
   $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
  

});

$(document).ready(function () {
    var currentURL = window.location.hash; //grab the current window location
    if(currentURL != ""){
        
        $("#artcstab1").hide();
    $("#artcstab2").hide();
    $("#artcstab3").hide();
    $("#artcstab4").hide();
    $("#artcstab5").hide();
    $("#artcstab6").hide();
    $("#artcstab7").hide();
    $("#artcstab8").hide();
    $("#artcstab9").hide();
    $("#artcstab10").hide();
    console.log(currentURL.replace('#','#art'));
    $(currentURL.replace('#','#art')).show();
    
      $("#detcstab1").hide();
    $("#detcstab2").hide();
    $("#detcstab3").hide();
    $("#detcstab4").hide();
    $("#detcstab5").hide();
    $("#detcstab6").hide();
    $("#detcstab7").hide();
    $("#detcstab8").hide();
    $("#detcstab9").hide();
    $("#detcstab10").hide();
    console.log(currentURL.replace('#','#det'));
    $(currentURL.replace('#','#det')).show();
    
    $("#cstab1").hide();
    $("#cstab2").hide();
    $("#cstab3").hide();
    $("#cstab4").hide();
    $("#cstab5").hide();
    $("#cstab6").hide();
    $("#cstab7").hide();
    $("#cstab8").hide();
    $("#cstab9").hide();
    $("#cstab10").hide();
    $(currentURL).show();
    
   
    console.log(currentURL);
    }
});