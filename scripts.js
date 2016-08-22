$(document).ready(function(){

//function definitions ---------------------------------------------------

//uses date object
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('dateDiv1').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

//validate email using regex
  function validateEmail(string){
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(string === ''){
      alert("Empty Field: Please Enter Your Email Address!");
      return false;
    }else if (!(string).match(emailRegex)){
      alert("Invalid Data: Please Enter A Valid Email!");
      return false;
    }else{
      return true;
    }
  }

  //objects: strings function definitions
  function firstStrResponse(n,g,a) {
    $("div#strOutput").append("<br>Hello " + n +" nice to meet you!");
    setTimeout(function(){secondStrResponse(n, g, a);}, 3000);
  }
    //objects: strings function definitions
  function secondStrResponse(n2,g2,a2) {
    var temp = "";
    var str = "";
    var o = "<br>Ok so your name is ";
    var y = ", you are a ";
    var a = ", and you are ";
    var l = " years of age.";

      str = o + n2 + y + g2 + a + a2 + l;

  //Ok so your name is josh, you are a male, and you are 29 years of age."
    $("div#strOutput").append(str);

  }


  //end of function definitions -------------------------------------------

  //main logic ----------------------------------------------------------------

  //sidebar toggle logic
  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  });

  //starts javascript clock
  startTime();

  //objects: math logic
  $("#mathBtn").click(function(){
    $("#mathOutput").empty();
    var num1 = $("#mathInput").val();

    $("#mathOutput").append("Num : "+num1+"<br>"+
      "Random Number (1-100): "+Math.floor((Math.random() * 100) + 1)+"<br>"+
      "Rounded  : "+Math.round(num1)+"<br>"+
      "Square Root : "+Math.sqrt(num1)+"<br>"+
      "Floor : "+Math.floor(num1)+"<br>"+
      "Absolute Value : "+Math.abs(num1)+"<br>"+
      "Ceiling  : "+Math.ceil(num1)+"<br>"+
      "Sine : "+Math.sin(num1)+"<br>"+
      "Tangent : "+Math.tan(num1));
  });

  //objects: strings logic
  $(function(){
      var name, gender, age;

      $("#strSubBtn").click(function(){
        name = $("#nameStrIn").val();
        gender = $("#genderStrIn").val();
        age = $("#ageStrIn").val();
        console.log("Name : "+name);
        console.log("gender : "+gender);
        console.log("age : "+age);

        if( name !== "" && gender !== "" && age !== ""){
          setTimeout(function(){firstStrResponse(name, gender, age);}, 1000);
        }else{
          alert("These fields cannot be empty.");
        }
      });
  });

//objects: datetime logic
  $(function(){
    function getDatetime(){
      var currentdate = new Date();
      var datetime = "Current Date : " + currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/"
                  + currentdate.getFullYear() + "   Time : "
                  + currentdate.getHours() + ":"
                  + currentdate.getMinutes() + ":"
                  + currentdate.getSeconds();

      return datetime;
    }
      //click event handler
      $("#dateBtn").click(function(){
         var dt= getDatetime();
         $('#dateDiv').empty();
        $('#dateDiv').append(dt);
     });
   });


  //dropdown menu logic
  $(function(){
      $("ul.dropdown li").hover(function(){
          $(this).addClass("hover");
          $('ul:first',this).css('visibility', 'visible');
      }, function(){
          $(this).removeClass("hover");
          $('ul:first',this).css('visibility', 'hidden');
      });
      $("ul.dropdown li ul li:has(ul)").find("a:first").append(" &raquo; ");
  });

      //effects: animate logic
      $("#btnAnimate").click(function(){
        $("#div1").animate({width: '100%', opacity: '0.4'}, "slow");
      });

      //effects: easing logic
      $("#btnEasing").click(function(){
        $("#div1").animate({height: '150px'}, "slow", "swing");
      });

      //effects: toggle logic
      $("#btnToggle").click(function(){
        $("#div1").toggle();
      });

      //effects: fadeout logic
      $("#btnFadeOut").click(function(){
        $("#div1").fadeOut();
      });

      //widgets: tabs logic
      $("#tabsBtn").click(function(){
        $("#tabs").tabs();
        $("#tabs").toggle();
      });

    //objects: strings logic
    $("#disStrBtn").click(function(str, strArray){
      var str = $("#strManInput").val();
      var strArray = str.split("");
      alert("String : " + str + " Array : " + strArray);
    });

    //widgets: dialog logic
    $(function() {
      var dialog, form,
        emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        name = $( "#name" ),
        email = $( "#email" ),
        password = $( "#password" ),
        allFields = $( [] ).add( name ).add( email ).add( password ),
        tips = $( ".validateTips" );

    function updateTips( t ) {
      tips
        .text( t )
        .addClass( "ui-state-highlight" );
      setTimeout(function() {
        tips.removeClass( "ui-state-highlight", 1500 );
      }, 500 );
    }

    function checkLength( o, n, min, max ) {
      if ( o.val().length > max || o.val().length < min ) {
        o.addClass( "ui-state-error" );
        updateTips( "Length of " + n + " must be between " +
          min + " and " + max + "." );
        return false;
      } else {
        return true;
      }
    }

    function checkRegexp( o, regexp, n ) {
      if ( !( regexp.test( o.val() ) ) ) {
        o.addClass( "ui-state-error" );
        updateTips( n );
        return false;
      } else {
        return true;
      }
    }

    function addUser() {
      var valid = true;
      allFields.removeClass( "ui-state-error" );

      valid = valid && checkLength( name, "username", 3, 16 );
      valid = valid && checkLength( email, "email", 6, 80 );
      valid = valid && checkLength( password, "password", 5, 16 );

      valid = valid && checkRegexp( name, /^[a-z]([0-9a-z_\s])+$/i, "Username may consist of a-z, 0-9, underscores, spaces and must begin with a letter." );
      valid = valid && checkRegexp( email, emailRegex, "eg. bill@microsoft.com" );
      valid = valid && checkRegexp( password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9" );

      if ( valid ) {
        $( "#users tbody" ).append( "<tr>" +
          "<td>" + name.val() + "</td>" +
          "<td>" + email.val() + "</td>" +
          "<td>" + password.val() + "</td>" +
        "</tr>" );
        dialog.dialog( "close" );
      }
      return valid;
    }

    dialog = $( "#dialog-form" ).dialog({
      autoOpen: false,
      height: 300,
      width: 350,
      modal: true,
      buttons: {
        "Create an account": addUser,
        Cancel: function() {
          dialog.dialog( "close" );
        }
      },
      close: function() {
        form[ 0 ].reset();
        allFields.removeClass( "ui-state-error" );
      }
    });

    form = dialog.find( "form" ).on( "submit", function( event ) {
      event.preventDefault();
      addUser();
    });

    $( "#create-user" ).button().on( "click", function() {
      dialog.dialog( "open" );
    });


});

    //objects: arrays logic
  $( "#arySubBtn" ).click(function(){
    var str = $("#aryIn").val();
    var str2 = "hello";
    str = str.split("");
    str2 = str2.split("");

    console.log("Sort : " + str.sort());
    $("div#aryOutput").append("Sort : " + str.sort() + "<br>");

    str.push("s");
    console.log("Push  : " + str);
    $("div#aryOutput").append("Push : " + str + "<br>");

    str.pop();
    console.log("Pop  : " + str );
    $("div#aryOutput").append("Pop : "  + str + "<br>");

    str.shift("o");
    console.log("Shift  : " + str);
    $("div#aryOutput").append("Shift : "+ str + "<br>");

    str.unshift("l");
    console.log("Unshift : " + str);
    $("div#aryOutput").append("Unshift : " + str);
  });

});//.ready
