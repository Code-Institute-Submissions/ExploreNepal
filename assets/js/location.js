$(document).ready(function () {
    var locationData = "";
    $.getJSON("assets/js/location.json", function (locations) {
         locationData = locations;
// Set default place 
         var defaultPlace = locationData[0];
        initMap(defaultPlace.geocordinates.latitude, defaultPlace.geocordinates.longitude );
        $('#description').text(defaultPlace.description);
        $('.circle').css('background', 'url("' + defaultPlace.imageurl + '")');

// Set Buttons Dynamically
        var placeButtons = '';
        $.each(locations, function (key, place) {
            placeButtons += '<li class="btn btn-success" id="' + place.id + '" >' + place.name + '</li>';
        });
        $('#locations').append(placeButtons);
    });

// Load Place info on Button Click event 
     $('#locations').on('click', 'li', function () {
            var location = locationData.find(place1 => place1.id === this.id);
            console.log(location);
            $('#description').text(location.description);
            $('.circle').css('background', 'url("' + location.imageurl + '")');
            initMap(location.geocordinates.latitude, location.geocordinates.longitude);
        });
// Map load logic

    function initMap(lat, long) {
        let myLatLng = { lat:  parseFloat(lat), lng: parseFloat(long) };
        let map = new google.maps.Map(document.getElementById("map"), {
            zoom: 11,
            center: myLatLng,
        });
// Marker
        new google.maps.Marker({
            position: myLatLng,
            map,
        });
    }
    
});