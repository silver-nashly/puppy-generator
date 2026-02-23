// 1. Find the button, the picture frame, AND the download link
const button = document.getElementById('fetch-button');
const picture = document.getElementById('puppy-pic');
const downloadLink = document.getElementById('download-link');

// 2. Stock our "pantry" with your custom puppy list (Array)
const myPuppies = [
  "https://i.pinimg.com/736x/00/69/e0/0069e0ba10abbb484f9d6acfc32ebbc2.jpg",
  "https://i.pinimg.com/1200x/15/ac/34/15ac34bb8238b5f650a2972cf340bd3e.jpg",
  "https://i.pinimg.com/736x/e7/45/64/e7456461270888be09880a54ac2dccca.jpg",
  "https://i.pinimg.com/originals/05/cb/2b/05cb2beeae254b1ca9ebf35074c83a60.png",
  "https://i.pinimg.com/1200x/9c/ef/4d/9cef4d1695abc69134413d58b3e34bc3.jpg",
  "https://i.pinimg.com/736x/22/77/f6/2277f62f2caca4298f13ecdc025158bf.jpg",
  "https://i.pinimg.com/736x/eb/2e/2f/eb2e2f173fd3e9a9cd238b536e0c233a.jpg",
  "https://i.pinimg.com/736x/5c/47/e5/5c47e58a8922424674addbf52a75ef5b.jpg",
  "https://i.pinimg.com/736x/e1/96/62/e196620e80a1c35f9ceb4d9c8f0c5aa9.jpg"
];

// 3. Listen for the click
button.addEventListener('click', function() {
  
  // 4. Close your eyes and pick a random puppy from the list
  const randomIndex = Math.floor(Math.random() * myPuppies.length);
  const chosenPuppy = myPuppies[randomIndex];

  // 5. Put the chosen puppy in the frame
  picture.src = chosenPuppy;
  
  // 6. Tell the download button which puppy we just picked!
  downloadLink.href = chosenPuppy;
});
