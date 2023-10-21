const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImg = images[Math.floor(Math.random() * images.length)];

console.log(chosenImg);

const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImg}`;
bgImg.id = `bgImage`;

document.body.appendChild(bgImg);
