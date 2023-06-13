import React, { useCallback } from "react";
import { useState } from "react";

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  // const keyWordErrorMsg = 'Нужно ввести ключевое слово';

  const handleChange = (event) => {
    
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    // setErrors({...errors, [name]: ('keyword' in errors) ? target.setCustomValidity(keyWordErrorMsg) : target.validationMessage });
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());

    event.preventDefault();
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, setValues };
}