Template.geteoportal_page.helpers({
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(42.8541736, 74.604335),
        zoom: 12
      };
    }
  }
});