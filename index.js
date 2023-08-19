// Function to scroll to the fourth image
function scrollToImageFour() {
  var imageFour = document.querySelector('.image-four');
  imageFour.scrollIntoView({ behavior: 'smooth' });
}

document.querySelector(".about").addEventListener('click', scrollToImageFour);
