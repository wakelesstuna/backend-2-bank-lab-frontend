import { useState } from "react";
import styled from "styled-components";

const InputField = ({
  type,
  label,
  placeholder,
  validation,
  value,
  setValue,
  errorMsg,
  error,
  setError,
}) => {
  const handleChange = (e) => {
    const value = e.target.value;
    if (validation) {
      console.log("input");
      validation(value) ? setError(true) : setError(false);
    }
    setValue(value);
  };

  const handleBlur = (e) => {
    setValue(e.target.value);
  };

  return (
    <InputFieldStyle>
      <label htmlFor={placeholder}>{label}</label>
      <input
        id={placeholder}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <span>{errorMsg}</span>}
    </InputFieldStyle>
  );
};

const InputFieldStyle = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  padding-bottom: 20px;
  margin: auto;

  label {
    padding: 0.5rem 0;
    letter-spacing: 0.8px;
  }

  input {
    width: 200px;
    padding: 0.5em;
    line-height: 1.4;
    letter-spacing: 1px;
    background-color: #f9f9f9;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
  }
  span {
    position: absolute;
    left: 14px;
    bottom: 0;
    font-size: 0.8rem;
    color: #ff3333;
  }
`;

export default InputField;
