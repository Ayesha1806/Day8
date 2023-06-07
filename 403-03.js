var currentIndex = 0;
var images = document.querySelectorAll('.slider img');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');

// Show the initial image
showImage(currentIndex);

// Add event listeners to the previous and next buttons
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

function showImage(index) {
  // Hide all images
  for (var i = 0; i < images.length; i++) {
    images[i].style.transform = 'translateX(-100%)';
  }

  // Show the selected image
  images[index].style.transform = 'translateX(0)';
}

function showPrevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage(currentIndex);
}

function showNextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}
