import React from "react";

interface InputBoxProps {
  type: string;
  name: string;
  className: string;
  // value: string;
  placeholder: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
}

export default function InputBox({
  type,
  name,
  className,
  // value,
  placeholder,
  required,
  onChange,
  maxLength,
}: InputBoxProps) {
  return (
    <input
      type={type}
      name={name}
      className="form-control"
      // value={value}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      maxLength={300}
    />
  );
}
