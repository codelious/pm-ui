import { useState } from "react";

export function useForm(initialState = {}, validations = [], onSubmit = () => {}) {

    const { isValid: initialIsValid, errors: initialErrors } = validate(
      validations,
      initialState
    );
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isValid, setValid] = useState(false);
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
  
  export function isRequired(value) {
    return value != null && value.trim().length > 0;
  }
  
  export function isSame(value1, value2) {
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