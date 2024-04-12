// accordion.js

document.querySelectorAll('.more-info').forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      var section = event.target.closest('section');
      var additionalInfo = section.querySelector('.additional-info');
      if (additionalInfo.style.display === 'none') {
        additionalInfo.style.display = 'block';
      } else {
        additionalInfo.style.display = 'none';
      }
    });
  });
  