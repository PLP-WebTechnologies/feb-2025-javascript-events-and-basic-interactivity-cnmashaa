// Form Validation
const form = document.getElementById('signUpForm');
const formMessage = document.getElementById('formMessage');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!username || !email) {
    formMessage.textContent = "Please fill out all fields!";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";
  }
});

// Modal functionality
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});
