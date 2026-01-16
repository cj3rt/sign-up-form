document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Redirect to welcome page with email as parameter
    window.location.href = `welcome.html?email=${encodeURIComponent(email)}`;
});