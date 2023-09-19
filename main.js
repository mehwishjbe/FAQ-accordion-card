const boxes = document.querySelectorAll(".box");

boxes.forEach(element => {
  const icon = element.querySelector('.arrow');
  element.addEventListener('click', () => {
    icon.classList.toggle('active');
  });
});