//Twitter Widget
!function(d,s,id) {
var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

//Facebook Button
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//Google Map
var map;
function initMap() {
  var myLatLng = {lat: 40.892321, lng: -74.477377};

  map  = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 11
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "My Locale!"
  });
}

//Map alerts on click
var clicks = 0; //counter
var a =document.getElementById("map"); //element
a.onclick = function(b) {
  console.log(++clicks); //increment it
}
$("#map").on("click", function() {
  console.log("clicked");
  if (clicks > 1) {
    //do nothing
  } else {
    alert ("New Jersey is a great place to live and work!");
  };
});


//Document Ready
$(document).ready(function(){
  // Smooth Scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top
    }, 500, function () {
      window.location.hash = href;
    });
    return false;
  });

  // Stellar
  $.stellar();

   // Tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  $(function() {
    $('[data-tooltip="true"]').tooltip();
  });
  $(function () {
    $("#item1").tooltip();
  });

  $(".message-box").on("keyup", function(){
    console.log("keyup happened"); //here we make sure we're catching the keyup
    var charCount = $(".message-box").val().length;
    console.log(charCount);
    $("#char-count").html(charCount);
    if(charCount > 50) {
      $("#char-count").css("color", "red");
    } else {
      $("#char-count").css("color", "black");
    };
  });

  $(".message-box").css("background-color", "#FFCB9B");

  //Work Section
  for(var i = 0; i < works.length; ++i ) {
    $("#work").append("\
      <div class='col-md-3 col-xs-12'>\
        <a href='" + works[i].url + "' class='work-img'>\
          <img class='img-responsive' src='" + works[i].pic + "'>\
          <span class='info "+ infoId[i] +"'><p class='proj-title'></p> " + works[i].title + " </span>\
        </a>\
      </div>\
    ");
    var images = $("#work img");
    if (i%2 === 0) {
      $(images[i]).css("border", "2px solid #2F5A92");
    } else {
      $(images[i]).css("border", "2px solid #FF9F47");
    };
    $("#work2").append("\
      <div class='col-md-3 col-xs-12'>\
        <a href='" + works[i].url + "' class='work-img'>\
          <img class='img-responsive' src='" + works[i].pic + "'>\
          <span class='info "+ infoId[i] +"'><p class='proj-title'></p> " + works[i].title + " </span>\
        </a>\
      </div>\
    ");
    var images = $("#work2 img");
    if (i%2 === 0) {
      $(images[i]).css("border", "2px solid #2F5A92");
    } else {
      $(images[i]).css("border", "2px solid #FF9F47");
    };
  };
  $(".work-img").mouseenter( function() {
    $(".info", this).show();
  }).mouseleave( function() {
    $(".info", this).hide();
  });
});


//Hides message the input has been received
$(".received").hide();

//Click Submit in Contact Section
$("#button").on("click", function() {
  var comment = $(".message-box").val();
  var contact = $(".name-box").val();
  
  console.log("clicked", contact, comment);
  $("#visible-content").html(comment);
  $("#visible-contact").html(contact);

  if(comment == "") {
    $(".message-box").css("border", "2px solid red");
  } else {
    //Hides boxes upon clicking "Submit"
    $(".message-box, .name-box, .number-box, .email-box, #box-name").hide();

    //Reveals Input content
    $(".received, #visible-content, #visible-contact").show();
    $(".received, #visible-content, #visible-contact").css({"font-size":"1.3em", "color":"#2D507E"});
  };

  return false;

});
$('.nav a').on('click', function(){
  $('.btn-navbar').click(); //bootstrap 2.x
  $('.navbar-toggle').click() //bootstrap 3.x by Richard
});