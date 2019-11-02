ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [59.939161, 30.321783],
      zoom: 17,
      controls:[]
    }),
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
      hintContent: 'Собственный значок метки',
      balloonContent: 'Это красивая метка'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-marker.png',
      iconImageSize: [231, 190],
      iconImageOffset: [-19, -218]
    });
  myMap.geoObjects
    .add(myPlacemark);
});
