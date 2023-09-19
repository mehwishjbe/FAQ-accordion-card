const boxes = document.querySelectorAll(".box");

boxes.forEach(element => {
  const icon = element.querySelector('.arrow');
  const answer = element.querySelector('.answer');
  const spantext = element.querySelector('span');

  element.addEventListener('click', () => {
    icon.classList.toggle('active');
    answer.classList.toggle('active');
    spantext.classList.toggle('active');
  });
});