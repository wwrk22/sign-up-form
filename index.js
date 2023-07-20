const password = document.getElementById("user-password");
const passwordConfirm = document.getElementById("user-password-confirm");
const passwordErrorMsg = "Passwords do not match.";

function setPasswordMismatch(event) {
  const pwLength = password.value.length;
  const pwConfirmLength = passwordConfirm.value.length;

  const pwLengthOk = (password.minLength <= pwLength) && (pwLength <= password.maxLength);
  const pwConfirmLengthOk = (password.minLength <= pwConfirmLength) && (pwConfirmLength <= password.maxLength);

  if ((pwLengthOk && pwConfirmLengthOk) && (password.value === passwordConfirm.value)) {
    password.classList = "password-match";
    passwordConfirm.classList = "password-match";
  } else {
    if (password.value !== "" && passwordConfirm.value !== "" && pwLength === pwConfirmLength) {
      password.classList = "password-mismatch";
      passwordConfirm.classList = "password-mismatch";
    } else {
      password.classList = "";
      passwordConfirm.classList = "";
    }
  }
}

password.addEventListener("input", setPasswordMismatch);
passwordConfirm.addEventListener("input", setPasswordMismatch);
