document.getElementById("login_data").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form submission
  
    // Get the form input values
    const email = document.getElementById("lemail").value;
    const pass = document.getElementById("lpass").value;
    
    // Store the form data in an object or use them as needed
    const formData = {
      email: email,
      pass: pass,
    };
    // console.log(formData)


    try {
      const response = await fetch("http://localhost:8080/r_register/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error("API request failed. Status: " + response.status);
      }
  
      const responseData = await response.json();
      // console.log(responseData);
      if (responseData.success) {
        alert("Successfully loggin")
        window.location.href = "index.html"; // Redirect to horoscope.html
      } else {
        alert("Incorrect email or password");
        window.location.href = "login_index.html" // Redirect to index.html
      }
      
  
    } catch (error) {
      console.error(error);
    }
  });