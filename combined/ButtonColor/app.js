const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  button.addEventListener('click', colorise);
}

const h1s = document.querySelectorAll('h1');

for (const h1 of h1s) {
  h1.addEventListener('click', colorise);
}

function colorise() {
  this.style.backgroundColor = randomColor();
  this.style.color = randomColor();
}
