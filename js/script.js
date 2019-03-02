'use strict';

var btn = document.getElementById('button');

var template = document.getElementById('template-container').innerHTML;
var main = document.getElementById('main');
Mustache.parse(template);
var text = '';
for (var i=0; i<data.length; i++) {
  text += Mustache.render(template, data[i]);
};
main.insertAdjacentHTML('beforeend', text);


var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
cellAlign: 'left',
contain: true,
hash: true
});

window.initMap = function() {

var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 4, center: data[0].cords});

for (var i=0; i<data.length; i++){
  var marker = new google.maps.Marker({position: data[i].cords, map: map});
  
  var addListener = function(i) {
    google.maps.event.addListener(marker, 'click', function(){flkty.select(i, true)});
  }

  addListener(i);
}

flkty.on( 'change', function( index ) {
  map.panTo(data[index].cords);
});
}

btn.addEventListener('click', function(){flkty.select(0, true)});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
progress = Math.max( 0, Math.min( 1, progress ) );
progressBar.style.width = progress * 100 + '%';
});