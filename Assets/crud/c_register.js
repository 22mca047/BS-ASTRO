document.getElementById("signup_data").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent form submission

  // Get the form input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const dob = document.getElementById("dob").value;
  const pass = document.getElementById("pass").value;
  // const cpass = document.getElementById("cpass").value;
  const mno = document.getElementById("mno").value;

  // Store the form data in an object or use them as needed
  const formData = {
    name: name,
    email: email,
    dob: dob,
    pass: pass,
    mno: mno
  };

  try {
    const response = await fetch("http://localhost:8080/r_register", {
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
    
    // Data inserted and page reload
    alert("Your Data inserted Successfully");
    window.location.reload(); 

  } catch (error) {
    console.error(error);
  }
});