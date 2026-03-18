   document.body.addEventListener('click', function () {
            alert('🇮🇳 Happy Independence Day! 🇮🇳');
        });

  


document.querySelectorAll('h1').forEach(function(h1) {
  h1.addEventListener('mouseover', function() {
    h1.style.transform = 'scale(1.1)';
    h1.style.transition = 'transform 0.2s';
  });
  h1.addEventListener('mouseout', function() {
    h1.style.transform = 'scale(1)';
  });
});



document.querySelector('.second img').addEventListener('click', function() {
  alert('Ashoka Chakra: The wheel of law and dharma!');
});
