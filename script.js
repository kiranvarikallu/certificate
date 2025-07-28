

  
  
    function register() {
      const email = document.getElementById("email").value.trim();
      const pass = document.getElementById("password").value;

      if (!email || !pass) {
        alert("Enter email and password");
        return;
      }

      // Check if already registered
      if (localStorage.getItem(email)) {
        alert("Already registered. Please login.");
        return;
      }

      localStorage.setItem(email, pass);
      alert("Registered successfully! Now login.");
    }

    function login() {
      const email = document.getElementById("email").value.trim();
      const pass = document.getElementById("password").value;

      const savedPass = localStorage.getItem(email);

      if (!savedPass) {
        alert("No such user found. Please register.");
        return;
      }

      if (savedPass !== pass) {
        alert("Incorrect password");
        return;
      }

      alert("Login successful!");
      document.getElementById("dashboardLink").style.display = "inline-block";
    }
  