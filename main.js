let messages = [];

function validatePassword(pass1, pass2) {
  if (pass1.length < 6) {
    messages.push("Password Must Have Atleast 6 Characters");
    return false;
  } else if (pass1 !== pass2) {
    messages.push("Two Password Fields Do not Match");
    return false;
  } else return true;
}

function validateInput(text, regex, length) {
  return text.length > length && regex.test(text) ? true : false;
}

function validate() {
  messages = [];
  let firstName = document.querySelector("#firstName").value;
  let lastName = document.querySelector("#lastName").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let confirmPassword = document.querySelector("#confirmPassword").value;
  let validEmailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let validTextRegex = /^[a-zA-Z]+$/;

  !validateInput(firstName, validTextRegex, 2)
    ? messages.push("Invalid FirstName")
    : !validateInput(lastName, validTextRegex, 2)
    ? messages.push("Invalid LastName")
    : !validateInput(email, validEmailRegex, 2)
    ? messages.push("Invalid Email Address")
    : validatePassword(password, confirmPassword)
    ? messages.push("Signed Up Successfully")
    : messages.push("Signed Up Failed");
  alert(messages);
}
