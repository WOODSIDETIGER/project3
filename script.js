window.initMap = function() {
  const citiFieldLocation = { lat: 40.7571, lng: -73.8458 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: citiFieldLocation, 
  });
  new google.maps.Marker({
    position: citiFieldLocation, 
    map: map,
    title: "Citi Field",
  });
};