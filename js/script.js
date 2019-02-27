'use strict';

(function(){

  var template = document.getElementById('template-container').innerHTML;
  var main = document.getElementById('main');
  Mustache.parse(template);
  var text = '';
  for (var i=0; i<data.length; i++) {
    text += Mustache.render(template, data[i]);
  };
  main.insertAdjacentHTML('beforeend', text);

})();

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  hash: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
//   hash: true,
});

var btn = document.getElementById('button');

btn.addEventListener('click', function(){flkty.select(0, true)});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});