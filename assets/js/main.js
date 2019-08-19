
var intervalId;
// var time = 5
var clockRunning = false;



var firebaseConfig = {
    apiKey: "AIzaSyC_gGyhE2W5YfO0nANuaoqGtB4gEPYD_qs",
    authDomain: "portfolio-message-list.firebaseapp.com",
    databaseURL: "https://portfolio-message-list.firebaseio.com",
    projectId: "portfolio-message-list",
    storageBucket: "",
    messagingSenderId: "606920969141",
    appId: "1:606920969141:web:43fb3fadb8991884"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  function showhideSend(){
    $(".sent").fadeIn();
    if (!clockRunning){
        clearInterval(intervalId);
        intervalID = setInterval(decrement, 1000);
        clockRunning = true;
        if(time == 0){
            $(".sent").fadeOut();          
            }
        }
        function countdown(){
            time--
            console.log(time)
            $("#timer").text(time);
            if(time < -5){
            $(".sent").fadeOut();
            clearInterval(intervalId);           
            }
        }
}  

$(".nameplate").hover(function(){
    
    // if (!clockRunning){
    //     intervalID = setInterval(countdown, 1200);
    //     clockRunning = true;
    // }
    // function countdown(){
    //     time--
    //     console.log(time)
    //     $("#timer").text(time);
    //     if(time < 3){
    //         $(".jetfly").hide();
    //         $(".jetstay").show();
    //         clearInterval(intervalId);
    //     }
    // }
  });

// hide elements
$(document).ready(function(){
    $(".jetstay").hide();
    $(".jetfly").hide();
    $(".buttondiv").hide();
    $(".modal").hide();
    $(".portoptions").hide();
    $(".frontContact").hide();
    $(".jetfly").show();
    $(".buttondiv").fadeIn(3000);
    // $(".scroll").hide();

    // // go to frontpage on document load
    $('html,body').animate({
        scrollTop: $("#front").offset().top}, 'slow');        
})


// try cursor hover effects

// scrolldown to front page
$(".nameplate").click(function() {
    $('html,body').animate({
        scrollTop: $("#front").offset().top},
        'slow');
});


// scroll up to aboutpage
$(".one").click(function() {
    $('html,body').animate({
        scrollTop: $("#abt").offset().top},
        'slow');
});

// scrolldown to portfolio page
$(".two").click(function() {
    $('html,body').animate({
        scrollTop: $("#port").offset().top},
        'slow');
});

$("#frontCtc").click(function() {
    $(".frontContact").slideToggle();
});
$(".ctcClose").click(function() {
    $(".frontContact").slideToggle();
});




// send user input to firebase
$(".sendBtn").on("click", function(event){
    
    event.preventDefault();

    // grab user input
    var custName = $("#custName").val().trim();
    var custEmail = $("#custEmail").val().trim();
    var custMsg = $("#box3").val().trim();

    // alert message sent
    var notSent = "All fields are required"
    var sent = "Message Sent!"

    //MUST fill in all fields
    if (custName === "" || custEmail === "" || custMsg === "")
    {
        $(".sent").text(notSent)
        $(".sent").fadeIn()
        setTimeout($(".sent").fadeOut(), 10000);
        clearInterval();

        

        // showhideSend();
        console.log("invalid")
    }
    else{
        $(".sent").text(sent)
        console.log("name" + custName);
        console.log("email" + custEmail);
        console.log("msg" + custMsg);
    

        $(".sent").fadeIn()
        setTimeout($(".sent").fadeOut(), 10000);
        clearInterval();

        // showhideSend();
        // create object that will hold train data
        var newLead = {
            customerName: custName,
            customerEmail: custEmail,
            customerMsg: custMsg,
        };
        // upload new object to firebase database
        database.ref().push(newLead);
    
        // clear text boxes after submitting
        $("#custName").val("");
        $("#custEmail").val("");
        $("#box3").val("");    
    }
    
//     var leadMessage = ("Customer Name: " + custName + "\n\n" + "Customer Email: " + custEmail + "\n\n" + "Message: " + custMsg);
//     fs.appendFile("sample.txt", leadMessage, function(err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("New Lead added!");
//   }
});

// scroll arrow buttons
$("#down").click(function() {
    $('html,body').animate({
        scrollTop: $("#front").offset().top},
        'slow');
});
$("#up").click(function() {
    $('html,body').animate({
        scrollTop: $("#front").offset().top},
        'slow');
});


// social media buttons
$("#insta").click(function() {
    window.open("https://www.instagram.com/_joeylasagna/");
});
$("#git").click(function() {
    window.open("https://github.com/joeylansangan");
});
$("#linked").click(function() {
    window.open("https://www.linkedin.com/in/jan-jose-lansangan-3028b9150/");
});
$("#google").click(function() {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=joeylansangan@gmail.com&su=&body=");
});

// current time display

var update = function() {
    $(".time").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(update, 1000);

// portfolio js
// portfolio options button
$("#goto").click(function(){
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-open"));
          $(this).attr("data-state", "open");
          $(this).css({ "filter": "brightness(200%)"});
        }else if( state === "open"){
        $(this).attr("src", $(this).attr("data-close"));
        $(this).attr("data-state", "still");
        $(this).css({ "filter": "none"});
        }
    $(".portoptions").slideToggle();
});




// modal close button
$(".close").click(function(){
    $(".modal").hide();
})

$(".item").click(function(){
    $(".modal").toggle("slide");
  
})

// portfolio menu
// scrollupto front page
$(".tri").click(function() {
    $('html,body').animate({
        scrollTop: $("#front").offset().top},
        'slow');
});

// scroll upto contact
$("#portcontact").click(function() {
    if($(".frontContact").is(':visible')){
        $('html,body').animate({
            scrollTop: $("#front").offset().top},
            'slow');
    }
    else{
        $(".frontContact").show();
        $('html,body').animate({
            scrollTop: $("#front").offset().top},
            'slow');
    }
});


