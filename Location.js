function initMap() {
    // Create a map object and center it on the user's location
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: latitude, lng: longitude},
        zoom: 8
      });
      // Add a marker to the map at the user's location
      var marker = new google.maps.Marker({
        position: {lat: latitude, lng: longitude},
        map: map
      });
    }, function() {
      // Handle errors here
    });
  }
  