import { useState } from "react";

function SignUp(onSignup) {
  const initialState = { email: "", password: "", repeatPassword: "" };
  const validations = [
    ({ email }) => isRequired(email) || { email: "Email is required" },
    ({ password }) =>
      isRequired(password) || { password: "Password is required" },
    ({ password, repeatPassword }) =>
      isSame(password, repeatPassword) || {
        repeatPassword: "Passwords do not match",
      },
  ];

  const { values, isValid, errors, touched, changeHandler, submitHandler } = useForm(initialState, validations, onSignup);

  return (
    <form onSubmit={submitHandler}>
      <label>Email</label>
      <input
        type='email'
        name='email'
        required
        value={values.email}
        onChange={changeHandler}
      />
      {touched.email && errors.email && <p className="error">{errors.email}</p>}
      <button disabled={isValid}>Sign up</button>
    </form>
  );
}

function useForm(initialState = {}, validations = [], onSubmit = () => {}) {
  const { isValid: initialIsValid, errors: initialErrors } = validate(
    validations,
    initialState
  );
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isValid, setValid] = useState(true);
  const [touched, setTouched] = useState({});

  const changeHandler = (event) => {
    const newValues = { ...values, [event.target.name]: event.target.value };
    const { isValid, errors } = validate(validations, newValues);
    setValues(newValues);
    setValid(isValid);
    setErrors(errors);
    setTouched({...touched, [event.target.name]: true});
  };

  const submitHandler = event => {
    event.preventDefault();
    onSubmit(values);
  }
  return { values, changeHandler, isValid, errors, touched, submitHandler };
}

function isRequired(value) {
  return value != null && value.trim().length > 0;
}

function isSame(value1, value2) {
  return value1 === value2;
}

function validate(validations, values) {
  const errors = validations
    .map((validation) => validation(values))
    .filter((validation) => typeof validation === "object");
  return {
    isValid: errors.length === 0,
    errors: errors.reduce((errors, error) => ({ ...errors, ...error }), {}),
  };
}

export default SignUp;
