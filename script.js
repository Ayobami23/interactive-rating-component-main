const inputs = document.querySelectorAll('.inputs span');
const submitBtn = document.getElementById('submit');
const rating = document.querySelector('.rating');
const modal = document.querySelector('.modal');
const content = document.querySelector('.content');
let selectedInput = '';

inputs.forEach((input) => {
  input.addEventListener('click', () => {
    selectedInput = input.textContent;
  });
});

submitBtn.addEventListener('click', () => {
  rating.innerHTML = selectedInput;
  modal.style.display = 'block';
  content.style.display = 'none';
});
