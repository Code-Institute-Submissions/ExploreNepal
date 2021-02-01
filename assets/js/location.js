$(document).ready(function () {
    var locationData = "";
    $.getJSON("assets/js/location.json", function (locations) {
         locationData = locations;
       
});
});



//  function initMap(){
//            var places = {
//                zoom: 6.15,
//                center: {lat:27.7172, lng:85.3240}
//            } 
//            // Map
//            var map = new google.maps.Map(document.getElementById("map"), places);
//            // Marker
//            var marker =new google.maps.Marker({
//                position:{lat:27.7105, lng:85.3487},
//                map:map
//            });
//         