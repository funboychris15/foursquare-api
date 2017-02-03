$(document).ready(function() {
    console.log("ready");
            $("#find").click(function() {
                var searchVal = $("#search").val();
                var searchVal2 = $("#search-2").val();
                var part1 = "https://api.foursquare.com/v2/venues/search?";
                var part2 = "client_id=X3SWXEWRMUL5CKOIR2C000OFVPRKMQ12TQJS40FNHGWFKDX0";
                var part3 = "&client_secret=JKQAOK3A2N4MYZCWGBN0YRTIZZIKYEQ5THOXY3ZBZVKJC2RA";
                var part4 = "&v=20161016";
                var part5 = "&limit=9";
                var part6 = "&query=";
                var part7 = "&near=";
                var URL = part1 + part2 + part3 + part4 + part5 + part6 + searchVal + part7 + searchVal2;
                console.log(URL);
             $.getJSON(URL,function(response){
                 var ResName= "Restaurant Name: ";
                 var Num= "Phone Number: ";
                 var Address= "Address: ";
                    var NameVal= response.response.venues[0].name;
                    var venues= response.response.venues;
                    for (var i=0; i < venues.length;i++){
                         var venue= venues[i];
                     var venueName= venue.name;
                     var venueNumber= venue.contact.number;
                     var venueAddress= venue.location.address;
                     $("#results").append(ResName + venueName + "<br>");
                     $("#results").append(Num + venueNumber + "<br>");
                     $("#results").append(Address + venueAddress + "<br>");
                     
                 }
                 
                 
                 
                 
                 
            });
                 
     });
        });

