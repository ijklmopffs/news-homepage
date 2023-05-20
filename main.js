const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Javascript code for Email Subscribe Newsletter
document.addEventListener('DOMContentLoaded', function() {
  var emailForm = document.getElementById('email-form');

  emailForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    var emailInput = document.getElementById('email-input').value;
    var confirmationUrl = 'https://example.com/confirm?email=' + encodeURIComponent(emailInput);

    // Here, you can implement your email sending logic
    // Send the confirmation email to the user using an email service or API
    
    alert('Confirmation email sent! Please check your inbox.');

    // Optionally, you can hide the overlay after successful subscription
    document.getElementById('overlay').style.display = 'none';
  });
});

// Get the form element
const form = document.getElementById('email-form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the email input value
  const emailInput = document.getElementById('email-input');
  const email = emailInput.value;

  // Send the confirmation email
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/subscribe', true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log('Confirmation email sent');
      // Show success message or perform any desired action
    } else {
      console.error('Error sending confirmation email:', xhr.responseText);
      // Show error message or perform any desired action
    }
  };

  xhr.onerror = function() {
    console.error('Error sending confirmation email:', xhr.responseText);
    // Show error message or perform any desired action
  };

  xhr.send(JSON.stringify({ email: email }));
});


// Get the overlay and subscription form elements
const overlay = document.getElementById('overlay');
const subscriptionForm = document.getElementById('subscription-form');

// Function to close the subscription form
function closeForm() {
  // Hide the overlay and subscription form
  overlay.style.display = 'none';
  subscriptionForm.style.display = 'none';
}

// Get the close button element
const closeButton = document.getElementById('close-btn');

// Add click event listener to the close button
closeButton.addEventListener('click', closeForm);
