var contentState = true;
$(document).ready(function(){
    // $("#abt").hide();
    $(".modal").hide();
    // $(".portoptions").hide();
    $(".slideContact").hide();
    $("#upBtn").hide();
    $("#walltext").hide();
    $(".abthide").hide();
    // $(".porthide").hide();
})

$(window).scroll(function(){
    $(".content").css("opacity", 1 - $(window).scrollTop() / 250);
  });


  // show portfolio navbar
// $(document).scroll(function() {
//     var y = $(this).scrollTop();
//     if (y < 600) {
//         $("#walltext").fadeOut();
//         $(".abthide").fadeOut();
//         // $("#portportfolio").css({"background" : "white"});
//         // $(".portMenu").css({"color" : "white"});
       
//     }
//     else if (y > 600){
//         $(".abthide").fadeIn();
//         $("#upBtn").fadeIn();
//         $("#walltext").fadeIn();
//     }
//     else if (y > 1200){
//         $("#walltext").fadeOut();
//         $(".abthide").fadeOut();
//     }
//   });

$(document).scroll(function() {
    var y = $(this).scrollTop();
    console.log("y value: " + y)
    if (y > 1900) {
        $("#walltext").fadeIn();
        $(".abthide").fadeIn();
    } 
    else {
        $(".abthide").fadeOut();
        $("#walltext").fadeOut();
        // $(".porthide").fadeOut();
    }
  });

$(".ctcClose").click(function() {
    if(contentState){
        $("#contact").css({ "background": "rgb(255, 255, 255)"});
        $("#contact").css({ "color": "black"});
        $(".slideContact").slideToggle();
        $(".content").css({ "margin-left": "30%"});
        contentState = false;
        console.log(contentState);
    }
    else{
        $("#contact").css({ "background": "none"});
        $("#contact").css({ "color": "whitesmoke"});
        $(".slideContact").slideToggle();
        $(".content").css({ "margin-left": "0"});
        contentState = true;
        console.log(contentState);
    }
});

// contact navbutton
$(".contactBtn").click(function() {
    if(contentState){
        console.log("contact")
        $("#contact").css({ "background": "rgb(255, 255, 255)"});
        $("#contact").css({ "color": "black"});
        $(".slideContact").slideToggle();
        $(".content").css({ "margin-left": "30%"});
        contentState = false;
        $('html,body').animate({
            scrollTop: $("#front").offset().top},
            'slow');
        console.log(contentState);
    }
    else{
        console.log("contact")
        $("#contact").css({ "background": "none"});
        $("#contact").css({ "color": "whitesmoke"});
        $(".slideContact").slideToggle();
        $(".content").css({ "margin-left": "0"});
        contentState = true;
        $('html,body').animate({
            scrollTop: $("#front").offset().top},
            'slow');
        console.log(contentState);
    }
        //         $(".content").fadeOut();
        //         $(".slideContact").slideToggle();
              
        //     }

   
});

// intro navbtn
$(".introBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#front").offset().top},'slow'); 
});


// portfolio navbtn
$(".portBtn").click(function() {
    console.log("work");
    $('html,body').animate({
        scrollTop: $("#port").offset().top},'slow'); 
});

// about navbtn
$(".aboutBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#abt").offset().top},'slow'); 
});


// scrolldown to home page
$("#aboutdownBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#port").offset().top},
        'slow');
});



// scrolldown to portfolio page
$("#downBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#port").offset().top},
        'slow');
});

$("#portfolio").click(function() {
    $('html,body').animate({
        scrollTop: $("#port").offset().top},
        'slow');
});


// scrolldown up front page
$("#upBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#front").offset().top},
        'slow');
});
$("#aboutupBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#front").offset().top},
        'slow');
});
$("#portintro").click(function() {
    $('html,body').animate({
        scrollTop: $("#front").offset().top},
        'slow');
});


// modal close button
$(".close").click(function(){
    $(".modal").hide();
})

// intouch modal
$("#intouch").click(function(){
    if($("#tipsyModal").is(':visible')){
        $("#tipsyModal").toggle("slide");
        $("#intouchModal").toggle("slide");
    }
    else if ($("#upBitModal").is(':visible')){
        $("#upBitModal").toggle("slide");
        $("#intouchModal").toggle("slide");
    }
    else if ($("#gunzModal").is(':visible')){
        $("#gunzModal").toggle("slide");
        $("#intouchModal").toggle("slide");
    }
    else{
        $("#intouchModal").toggle("slide");
    }
   
})

// tipsy modal
$("#tipsy").click(function(){
    if($("#intouchModal").is(':visible')){
        $("#intouchModal").toggle("slide");
        $("#tipsyModal").toggle("slide");
    }
    else if ($("#upBitModal").is(':visible')){
        $("#upBitModal").toggle("slide");
        $("#tipsyModal").toggle("slide");
    }
    else if ($("#gunzModal").is(':visible')){
        $("#gunzModal").toggle("slide");
        $("#tipsyModal").toggle("slide");
    }
    else{
        $("#tipsyModal").toggle("slide");
    }
   
})

// upBit modal
$("#upBit").click(function(){
    if($("#intouchModal").is(':visible')){
        $("#intouchModal").toggle("slide");
        $("#upBitModal").toggle("slide");
    }
    else if ($("#tipsyModal").is(':visible')){
        $("#tipsyModal").toggle("slide");
        $("#upBitModal").toggle("slide");
    }
    else if ($("#gunzModal").is(':visible')){
        $("#gunzModal").toggle("slide");
        $("#upBitModal").toggle("slide");
    }
    else{
        $("#upBitModal").toggle("slide");
    }
   
})

// gunz modal
$("#gunz").click(function(){
    if($("#intouchModal").is(':visible')){
        $("#intouchModal").toggle("slide");
        $("#gunzModal").toggle("slide");
    }
    else if ($("#tipsyModal").is(':visible')){
        $("#tipsyModal").toggle("slide");
        $("#gunzModal").toggle("slide");
    }
    else if ($("#upBitModal").is(':visible')){
        $("#upBitModal").toggle("slide");
        $("#gunzModal").toggle("slide");
    }
    else{
        $("#gunzModal").toggle("slide");
    }
   
})
