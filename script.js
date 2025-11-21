// LOGIN FUNCTION
async function loginUser() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  if (!email || !password) {
    alert("Please enter both email and password 💗");
    return;
  }

  try {
    const response = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login successful 🌸✨");
      localStorage.setItem("token", data.token);

      // Redirect after login
      window.location.href = "dashboard.html"; // change to your page
    } else {
      alert(data.message || "Login failed ❌");
    }
  } catch (error) {
    alert("Server error ❌ Check if backend is running.");
    console.error(error);
  }
}
