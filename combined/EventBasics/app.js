const btn = document.querySelector('#v2');

btn.onclick = function () {
  console.log('you clicked me');
};

function scream() {
  console.log('AAAAAAAAAAHHHHHHHHHH');
  console.log('Stop touching me!');
}

btn.onmouseenter = scream;

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', () => {
  alert('clicked!');
});
