const images = [
  "https://ew.com/thmb/MFZACNjTp5jsvDimuAJO6qnSLsE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/The-Boys-01-bc64c00c1d34485bb990c619b027cdce.jpg",
  "https://www.dexerto.com/cdn-cgi/image/width=750,quality=60,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/12/22/superman-age-header.jpg",
  "https://cdn.mos.cms.futurecdn.net/8ubDrXD99oBrwh2XtttPkk-1200-80.jpg",
  "https://static.toiimg.com/photo/65784944.cms",
  "https://e1.pxfuel.com/desktop-wallpaper/890/845/desktop-wallpaper-krish-krrish-3.jpg",
  "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/chris-evans-as-steve-rogers-captain-america-in-the-mcu.png",
  "https://hips.hearstapps.com/hmg-prod/images/msm2-reveal-attack-4k-legal-65284680c18ba.jpg?crop=0.490xw:0.872xh;0.115xw,0&resize=1200:*",
  "https://pop-verse.com/wp-content/uploads/2015/05/the-flash-main-612x330.jpg",
  "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/07/Marvels-Avengers-Iron-Man-Snap-outfit.jpeg",

  "https://wallpapers.com/images/featured/hulk-pictures-ys8d5ywwf61gazq7.jpg"
];

const imageTexts = [
  "Hi I am Soldier Boy... If I'd raised. You could make you better. And not some weak sniffling starved for attention taking drugs is uncool. I'm the most uncool mother on the planet. I might want to lay off the weed huh...",
  "If You Knew How You Are Loved, Not One Of You Would Raise A Hand In Rage Again.",
  "Bullet Don't Harm Me. But I Know Pain.",
  "Just Because Someone Stumbles And Loses Their Path, Doesn't Mean They're Lost Forever.",
  "A king's son will not necessarily become a king; only the deserving will become one",
  "I'm with you 'til the end of the line",
  "I swear to you... from now on... whenever I'm around, wherever I am... no one dies.",
  "I'm The Fastest Man Alive.",
  "I am Iron Man",
  "Hulk smash!"
];

const currentImage = document.getElementById('current-image');
const imageText = document.getElementById('image-text');
const prevButton = document.getElementById('prev-image-btn');
const nextButton = document.getElementById('next-image-btn');

const IMAGE_WIDTH = 800; // Set the width of all images
const IMAGE_HEIGHT = 600; // Set the height of all images

let currentIndex = 0;

// Display the first image and its text initially
currentImage.src = images[currentIndex];
currentImage.width = IMAGE_WIDTH; // Set width attribute
currentImage.height = IMAGE_HEIGHT; // Set height attribute
imageText.textContent = imageTexts[currentIndex];

prevButton.addEventListener('click', showPreviousImage);
nextButton.addEventListener('click', showNextImage);

function showPreviousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  currentImage.src = images[currentIndex];
  currentImage.width = IMAGE_WIDTH; // Set width attribute
  currentImage.height = IMAGE_HEIGHT; // Set height attribute
  imageText.textContent = imageTexts[currentIndex];
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  currentImage.src = images[currentIndex];
  currentImage.width = IMAGE_WIDTH; // Set width attribute
  currentImage.height = IMAGE_HEIGHT; // Set height attribute
  imageText.textContent = imageTexts[currentIndex];
}
