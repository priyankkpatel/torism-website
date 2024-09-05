const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton'); // Fixed typo
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signup');

// Event listener for Sign Up button
signUpButton.addEventListener('click', function() {
    signInForm.style.display = 'none';
    signUpForm.style.display = 'block';
});

// Event listener for Sign In button
signInButton.addEventListener('click', function() {
    signInForm.style.display = 'block';
    signUpForm.style.display = 'none';
});