const boxes = document.querySelectorAll(".box");

boxes.forEach(element => {
  const icon = element.querySelector('.arrow');
  const answer = element.querySelector('.answer');
  element.addEventListener('click', () => {
    icon.classList.toggle('active');
    answer.classList.toggle('active');
  });
});