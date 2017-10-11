document.addEventListener('DOMContentLoaded', function() {

  var galleryItems = document.querySelectorAll('.gallery-item');

  for(var i=0; i<galleryItems.length; i++) {
    galleryItems[i].addEventListener('mouseover', function(event) {
      var h2, img, item;

      item = event.path[1];
      img = event.path[1].children[0];
      h2 = event.path[1].children[1];
  
      switch(item.id) {
        case 'gallery-choose-hearing':
          img.classList.add('half-opacity');
          h2.style.color = '#0f3f76';
          h2.style.letterSpacing = '.02em';
          break;
        case 'gallery-merriweather':
          img.classList.add('half-opacity');
          h2.style.color = '#4f2e83';
          h2.style.letterSpacing = '.02em';
          break;
        case 'gallery-audiology-profiles':
          img.classList.add('half-opacity');
          h2.style.color = '#6c3332';
          h2.style.letterSpacing = '.02em';
          break;
        case 'gallery-ironskin-n1o':
          img.classList.add('half-opacity');
          h2.style.color = '#222';
          h2.style.letterSpacing = '.02em';
          break;
        case 'gallery-pyramid':
          img.classList.add('half-opacity');
          h2.style.color = '#0069bf';
          h2.style.letterSpacing = '.02em';
          break;
        case 'gallery-8-bit-energy':
          img.classList.add('half-opacity');
          h2.style.color = '#08914d';
          h2.style.letterSpacing = '.02em';
          break;
        case 'gallery-soundscape':
          img.classList.add('half-opacity');
          h2.style.color = '#2324a3';
          h2.style.letterSpacing = '.02em';
          break;
        case 'gallery-visual-identity':
          img.classList.add('half-opacity');
          h2.style.color = '#827369';
          h2.style.letterSpacing = '.02em';
          break;
        case 'gallery-screen-prints':
          img.classList.add('half-opacity');
          h2.style.color = '#a3235c';
          h2.style.letterSpacing = '.02em';
          break;
      }
    });

    galleryItems[i].addEventListener('mouseout', function(event) {
      event.path[1].children[0].classList.remove('half-opacity');
      event.path[1].children[1].style.color = '#fff';
      event.path[1].children[1].style.letterSpacing = '0';
    });
  }
});