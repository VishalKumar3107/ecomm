$("form").on("submit", function(event) {
    event.preventDefault();
    var username = $("#username").val();
    var password = $("#password").val();
  
    // Send a request to the server to check the login credentials
    $.post("/login", { username: username, password: password }, function(data) {
      if (data.success) {
        // Redirect to the dashboard page
        window.location.href = "/dashboard";
      } else {
        // Show an error message
        alert("Incorrect login credentials");
      }
    });
  });
  
  const loginTab = document.getElementById('login-tab');
  const signupTab = document.getElementById('signup-tab');
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  
  loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.style.display = "block";
    signupForm.style.display = "none";
  });
  
  signupTab.addEventListener('click', () => {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    signupForm.style.display = "block";
    loginForm.style.display = "none";
  });
  
  // add this code to make sure the signup form is hidden by default
  signupForm.style.display = "none";
  