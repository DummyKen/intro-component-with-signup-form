//Form validations

// select components
const claimBtn = document.getElementById('freetrial');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

// svg
const error = document.createElement('span');
error.innerHTML = "<img src="https://svgshare.com/i/fhJ.svg">"


// lets add event listeners
claimBtn.addEventListener('click', () => {
  // console.log(
  //   `Hello! ${firstName.value} ${lastName.value}, your email address is ${email.value} and your password is ${password.value}
  //   `
  // );

  // form validations
  if(firstName.value = ""){
    firstName.appendChild(error)
  }
})
