// Assuming you have a JavaScript function to handle form submission and redirection
document.getElementById("loginForm").addEventListener("submit", function(event){
    // Prevent default form submission
    event.preventDefault();
  
    // Your authentication logic here (e.g., check username and password)
    
    // For demonstration purposes, always redirect to a success page after successful login
    window.location.href = "success.html";
  });
  