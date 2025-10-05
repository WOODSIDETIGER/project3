alert('Greeting');
function initMap() {
    const mapCenter = { lat: 40.7571486641175, lng: -73.84551107900164 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: mapCenter,
    });
    new google.maps.Marker({
        position: mapCenter,
        map: map,
        title: "New York, NY",
    });