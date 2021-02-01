$(document).ready(function () {
    var locationData = "";
    $.getJSON("assets/js/location.json", function (locations) {
         locationData = locations;
       
         var defaultPlace = locationData[0];
        initMap(defaultPlace.geocordinates.latitude, defaultPlace.geocordinates.longitude );
        $('#description').text(defaultPlace.description);
        $('.circle').css('background', 'url("' + defaultPlace.imageurl + '")');

        var placeButtons = '';
        $.each(locations, function (key, place) {
            placeButtons += '<li class="btn btn-success" id="' + place.id + '" >' + place.name + '</li>';
        });
        $('#locations').append(placeButtons);
    });

    function initMap(lat, long) {
        let myLatLng = { lat:  parseFloat(lat), lng: parseFloat(long) };
        let map = new google.maps.Map(document.getElementById("map"), {
            zoom: 11,
            center: myLatLng,
        });
    }
});