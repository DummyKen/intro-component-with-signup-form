//Form validations

// select components
const claimBtn = document.getElementById("freetrial");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

// error messages
const firstError = document.querySelector("#firstError");
const lastError = document.querySelector("#lastError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

// svg
const error = document.createElement("span");
// error.innerHTML = "<img src="https://svgshare.com/i/fhJ.svg">"

// // delete error messages and
function deleteError(error) {
	error.style.display = "none";
}

// change back the display
function antiRed(element) {
	element.style.border = "0.3px solid grey";
}

// change back to normal from error state(element,error)
function revertNormal(element, error) {
	deleteError(error);
	antiRed(element);
}

// lets add event listeners
claimBtn.addEventListener("click", () => {
	// form validations

	//first name
	if (firstName.value === "") {
		firstName.classList.add("invalid");
		firstName.style.border = "1px solid red";
		firstError.style.display = "block";
	}
	//last name
	if (lastName.value === "") {
		lastName.classList.add("invalid");
		lastName.style.border = "1px solid red";
		lastError.style.display = "block";
	}
	//email
	if (email.value === "") {
		email.classList.add("invalid");
		email.placeholder = "email@example.com";
		email.style.border = "1px solid red";
		emailError.style.display = "block";
	}
	//password
	if (password.value === "") {
		password.classList.add("invalid");
		password.style.border = "1px solid red";
		passwordError.style.display = "block";
	}
});

// keydown events when reentering the inputs
firstName.addEventListener("keydown", () =>
	revertNormal(firstName, firstError)
);
lastName.addEventListener("keydown", () => revertNormal(lastName, lastError));
email.addEventListener("keydown", () => revertNormal(email, emailError));
password.addEventListener("keydown", () =>
	revertNormal(password, passwordError)
);

//click events for the inputs
firstName.addEventListener("click", () => revertNormal(firstName, firstError));
lastName.addEventListener("click", () => revertNormal(lastName, lastError));
email.addEventListener("click", () => revertNormal(email, emailError));
password.addEventListener("click", () => revertNormal(password, passwordError));

//add red color to other elements
