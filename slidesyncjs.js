(function(jwplayer){
  
  // theses variables will be loaded with config.xmlPath file
//  var images = ['slides.001.jpg',
//                'slides.002.jpg',
//                'slides.003.jpg',
//                'slides.004.jpg',
//                'slides.005.jpg',
//                'slides.006.jpg'];
  var times = [0, 5, 10, 15, 20, 25];
  
  var slidesyncPlugin = function(player, config, div) {
    
	function setup(event) {
	  player.onTime(function(event) {
		  var i = 0;
		  while (times[i + 1] < event.position) {
			  i++;
		  }
		  $('#' + config.containerId).html(event.position + '<br>' + i);
	  });
	  $.get(config.xmlPath, function(data) {
		  $xml = $(data);
		  $images = $xml.find('url');
		  alert('firstImage : ' + $images[0].firstChild.data);
	  });
    };

    player.onReady(setup);
    
  };

  jwplayer().registerPlugin('slidesyncjs', slidesyncPlugin);

})(jwplayer);
