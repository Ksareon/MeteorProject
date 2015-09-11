Subjects = new Mongo.Collection('subject');
Markers = new Mongo.Collection('markers');

Subjects.attachSchema(new SimpleSchema({
  type: {
    type: String,
    label: "Тип",
    allowedValues: ['Человек', 'Здание', 'Транспорт'],
    max: 60
  },

  name: {
    type: String,
    label: "Название",
    max: 600
  },

  description: {
    type: String,
    label: "Описание",
    max: 200
  },

  place: {
    type: String,
    label: "Местоположение",
    autoform: {
      type: 'map',
      afFieldInput: {
        geolocation: true,
        searchBox: true,
        autolocate: true,
        height: '400px'
      }
    }
  },

  dangerous: {
    type: String,
    label: "Уровень опасности",
    max: 100
  }
}));