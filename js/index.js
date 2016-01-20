//use document ready


$( document ).ready(function() {
});
//create array
var city = ["NYC","SF","LA","ATX","SYD"];

//use each
jQuery.each( city, function( i, val ) {

//append and get value of user input
var option= "<option value='" + val + "'> " + val + "</option>"
    console.log(option)
    $( "#city-type" ).append(option);

});

//preventDefault
//change
$("form").change(function(event) {
    event.preventDefault();    
    var city = $("#city-type").val();
    
//use class/attr not css
    // New York
    if (city=="NYC"){
        $("body").attr("class",'nyc');
    }

    // San Francisco
    if (city=="SF"){
        $("body").attr("class",'sf');
    }

    // Los Angeles
    if (city=="LA"){
        $("body").attr("class",'la');
    }

    // Austin
    if (city=="ATX"){
        $("body").attr("class",'austin');
    }

    // Sydney
    if (city=="SYD"){
        $("body").attr("class",'sydney');
    }
});