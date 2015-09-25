!function(){

  var position = function(place){
    var p = place.split(',');
    var lat = parseFloat(p[0]);
    var lng = parseFloat(p[1]);
    return { lat: lat, lng: lng };
  };

  Template.geoportal_page_subjects.helpers({
    name_value: function(){
      return {
      collection: Subjects.find({}),
      fields: [
        { key: 'name', label: 'Название' },
      ]
    }
      // return Filters.name;
    }
  });

  Template.geoportal_page_subjects.events({
    'keyup #name-filter': function(){
      alert(1);
    }
  });

  Template.geoportal_page_subjects.onCreated(function(){
    GoogleMaps.ready('geoportalMap', function(map) {
      var subjects = Subjects.find({});
      subjects.forEach(function(subject){

        var marker = new google.maps.Marker({
          position: position(subject.place),
          map: map.instance,
          title: subject.name
        });

        var infowindow = new google.maps.InfoWindow({
          content: '<h3>'+subject.name+'</h3>'
        });

        marker.addListener('click', function() {
          infowindow.open(map.instance, marker);
        });

      });
    });
  });
}();