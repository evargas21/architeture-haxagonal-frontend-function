import React, { ChangeEventHandler } from "react";

type InputFieldProps = {
  Icon: any;
  error: string | undefined;
  title: string;
  id: string | undefined;
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string | undefined;
  className: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const InputField = ({
  Icon,
  error,
  title,
  id,
  name,
  type,
  placeholder,
  className,
  onChange
}: InputFieldProps) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {title}
      </label>
      <div className="relative mt-2 rounded-md">
        <div className="relative">
          <input
            id={id}
            name={name}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            aria-describedby={`${name}-error`}
          />
          <Icon />
        </div>
        <div id={`${name}-error`} aria-live="polite" aria-atomic="true">
          <p className="mt-1 text-sm text-red-500">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default InputField;
