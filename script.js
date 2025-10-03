alert('Greeting');
function initMap() {
    const mapCenter = { lat: 40.7128, lng: -74.0060 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: mapCenter,
    });
    new google.maps.Marker({
        position: mapCenter,
        map: map,
        title: "New York, NY",
    });
}