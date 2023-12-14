document.querySelector('button').addEventListener('click', (evt) => {
  console.log(evt);
});

const input = document.querySelector('input');
input.addEventListener('keydown', (evt) => {
  console.log('KEYDOWN');
  console.log(evt);
});
input.addEventListener('keyup', () => {
  console.log('KEYUP');
});
