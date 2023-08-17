const formOpenBtn = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");
const signupBtn = document.querySelector("#signup");
const forgotBtn = document.querySelector("#forgot");
const loginBtn = document.querySelector("#login");
const pwShowHide = document.querySelectorAll(".pw_hide");
const loginForm = document.querySelector(".login_form");
const signupForm = document.querySelector(".signup_form");
const forgotForm = document.querySelector(".forgot_form");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
  loginForm.style.display = "none";
  forgotForm.style.display = "none";
  signupForm.style.display = "block";
});

forgotBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
  loginForm.style.display = "none";
  signupForm.style.display = "none";
  forgotForm.style.display = "block";
});

loginBtn.addEventListener("click", (e) => {
  formContainer.classList.remove("active");
  e.preventDefault();
  formContainer.classList.add("active");
  signupForm.style.display = "none";
  forgotForm.style.display = "none";
  loginForm.style.display = "block";
});

const backToLoginBtn = document.querySelector("#back-to-login");

backToLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  forgotForm.style.display = "none";
  loginForm.style.display = "block";
});


// Password Validation
function validate_password() {

			var pass = document.getElementById('pass').value;
			var confirm_pass = document.getElementById('cpass').value;
			if (pass != confirm_pass) {
				document.getElementById('wrong_pass_alert').style.color = 'red';
				document.getElementById('wrong_pass_alert').innerHTML
					= '☒ Use same password';
				document.getElementById('create').disabled = true;
				document.getElementById('create').style.opacity = (0.4);
			} else {
				document.getElementById('wrong_pass_alert').style.color = 'green';
				document.getElementById('wrong_pass_alert').innerHTML =
					'🗹 Password Matched';
				document.getElementById('create').disabled = false;
				document.getElementById('create').style.opacity = (1);
			}
		}
    
		function wrong_pass_alert() {
			if (document.getElementById('pass').value != "" &&
				document.getElementById('cpass').value != "") {
				alert("Your data is submitted");
			} else {
				alert("Please fill all the fields");
			}
		}

    function showAlert() {
      alert("Please Login");
      wondow.location.href = "login_index.html";
    }