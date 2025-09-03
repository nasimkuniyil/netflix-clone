function validateForm({ email, name, password, password2 }) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
  const passwordRegex = /^.{6,}$/;

  const results = {};

  if(email){
    results.isEmailValid = emailRegex.test(email);
  }

  if(name){
    results.isNameValid = nameRegex.test(name);
  }

  if(password){
    results.isPasswordValid = passwordRegex.test(password)
  }

  if(password2){
    results.isPassword2Valid = password == password2
  }

  return results;
}

export default validateForm;
