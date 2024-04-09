import React from "react";

interface InputBoxProps {
  type: string;
  name: string;
  errorBorderColor: string;
  className: string;
  value: string;
  placeholder: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  isInvalid?: boolean;
}

export default function InputBox({
  type,
  name,
  errorBorderColor,
  className,
  value,
  placeholder,
  required,
  onChange,
  maxLength,
  onBlur,
  isInvalid,
}: InputBoxProps) {
  return (
    <input
      type={type}
      name={name}
      className="form-control"
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      maxLength={300}
      onBlur={onBlur}
    />
  );
}
