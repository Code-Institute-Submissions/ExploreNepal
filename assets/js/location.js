class Location{
    constructor(location) {
        this.data = location || [];
    }
}

$(document).ready(function () {

    $.getJSON("assets/js/location.json", function (result) {
        const locations = new Location(result);

        const [defaultPlace] = locations.data;
        initializeMapWithDefaultPlace(initMap, defaultPlace);
        setPlaceLocationCard(defaultPlace);
        appendPlacesOfSelectedLocation(locations.data);



        $('#locations').on('click', 'li', function () {
            const locations = new Location(result);
            const matchedLocation = locations.data.find(place1 => place1.id === this.id);

            setPlaceLocationCard(matchedLocation);
            initializeMapWithDefaultPlace(initMap, matchedLocation);

        });
    });

    // function initMap(lat, long) {

    //     let myLatLng = {
    //         lat: parseFloat(lat),
    //         lng: parseFloat(long)
    //     };

    //     let map = new google.maps.Map(document.getElementById("map"), {
    //         zoom: 11,
    //         center: myLatLng,
    //     });

    //     new google.maps.Marker({
    //         position: myLatLng,
    //         map,
    //     });
    // }

});


function setPlaceLocationCard(location) {
    $('#description').text(location.description);
    $('.circle').css('background', 'url("' + location.imageurl + '")');
}

function initializeMapWithDefaultPlace(initMap, location) {
    initMap(location.geocordinates.latitude, location.geocordinates.longitude);
}

function appendPlacesOfSelectedLocation(locations) {
    var placeButtons = '';
    $.each(locations, function (key, place) {
        placeButtons += '<li class="btn btn-success" id="' + place.id + '" >' + place.name + '</li>';
    });
    $('#locations').append(placeButtons);
}



 function initMap(lat, lng) {

        let myLatLng = {
            lat: parseFloat(lat),
            lng: parseFloat(lng)
        };

        let map = new google.maps.Map(document.getElementById("map"), {
            zoom: 11,
            center: myLatLng,
        });

        new google.maps.Marker({
            position: myLatLng,
            map,
        });
    }





















