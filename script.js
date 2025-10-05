window.initMap = function() {
  const citiFieldLocation = { lat: 40.7571, lng: -73.8458 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: citiFieldLocation,
  });
  const marker = new google.maps.Marker({
    position: citiFieldLocation,
    map: map,
    icon: {
      url: 'media/image/tearofjoy.png',
      scaledSize: new google.maps.Size(40, 40)
    },
    animation: google.maps.Animation.BOUNCE
  });
  const infowindow = new google.maps.InfoWindow({
    content: "<h3>best NYC BASEBALL TEAM HAHA</h3>"
  });
  marker.addListener('click', () => {
    if (infowindow.getMap()) {
      infowindow.close();
    } else {
      infowindow.open(map, marker);
    }
  });
};