function initMap() {
  const varna = { lat: 43.223045, lng: 27.909135 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: varna,
  });

  const marker = new google.maps.Marker({
    position: varna,
    map: map,
  });
}
