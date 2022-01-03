import { useState } from "react";

export const useCustomForm = (initialState = {}) => {
  const [inputs, setInputs] = useState(initialState);

  const handleSubmit = (onSubmit) => {
    return (e) => {
      e.preventDefault();
      onSubmit(inputs, e);
    };
  };

  const onChange = (e) => {
    e.persist();
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const reset = (values = {}) => {
    setInputs(values);
  };

  return {
    handleSubmit,
    register: (name) => ({
      name,
      value: inputs[name] || "",
      onChange,
    }),
    reset,
  };
};
