// Get the form elements
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Add event listeners to the buttons
document.getElementById('login-btn').addEventListener('click', () => {
  loginForm.style.display = 'block';
});

document.getElementById('register-btn').addEventListener('click', () => {
  registerForm.style.display = 'block';
});

// Add event listeners to the submit buttons
document.getElementById('login-submit').addEventListener('click', (e) => {
  e.preventDefault(); // Prevent form submission
  
  // Validate the form fields
  if (username.value === '' || password.value === '') {
    alert('Please fill out the entire form before submitting.');
  } else {
    // Redirect to the next page
    window.location.href = 'index.html';
  }
});

document.getElementById('register-submit').addEventListener('click', (e) => {
  e.preventDefault(); // Prevent form submission
  
  // Validate the form fields
  if (name.value === '' || email.value === '' || username.value === '' || password.value === '' || gender.value === '' || phone.value === '' || dob.value === '' || nin.value === '' || address.value === '' || accountType.value === '') {
    alert('Please fill out the entire form before submitting.');
  } else {
    // Redirect to the next page
    window.location.href = 'index.html';
  }
});

document.getElementById('close-login-btn').addEventListener
('click',
    () => {
        loginForm.style.display = 'none';
    });

    document.getElementById('close-register-btn').addEventListener
    ('click',
        () => {
            registerForm.style.display = 'none';
        });

    // Add event listener to the plan trip button
document.getElementById('plan-trip-btn').addEventListener('click', () => {
    // Redirect to the plan trip page
    window.location.href = 'index.html';
  });
  
