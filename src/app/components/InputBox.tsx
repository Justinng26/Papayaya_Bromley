import React from "react";

interface InputBoxProps {
  type: string;
  className: string;
  value: string;
  placeholder: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  children?: React.ReactNode;
}

export default function InputBox({
  type,
  className,
  value,
  placeholder,
  required,
  onChange,
  maxLength,
}: InputBoxProps) {
  return (
    <input
      type={type}
      // name={name}
      className="form-control"
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      maxLength={maxLength}
    />
  );
}
