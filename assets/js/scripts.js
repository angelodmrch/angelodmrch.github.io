function onKonamiCode(cb) {
  var input = '';
  var key = '38384040373937396665';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}

onKonamiCode(function () {
	
  jQuery('.games').css('display', 'inline-block');

});

// ANIMATE ANCHOR 
$("body").on('click', 'a', function(event){        
    var hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 1000, function() {
        window.location.hash = hash;
    });

    return false;
}); 