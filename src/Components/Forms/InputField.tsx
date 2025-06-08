import React from "react";
import type { InputFieldProps } from "../../types/type";

const InputField: React.FC<InputFieldProps> = ({
  name,
  register,
  errors,
  label,
  placeholder,
  type = "text",
}) => {
  const error = errors?.[name]?.message;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-gray-700 font-semibold text-[15px]"
        >
          {label}
        </label>
      )}

      <input
        type={type}
        id={name}
        {...register(name)}
        placeholder={placeholder}
        className={`w-full px-4 py-2.5 rounded-xl border transition duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-500 ${
          error
            ? "border-red-500 focus:ring-red-400"
            : "border-gray-300 hover:border-amber-300"
        }`}
      />

      {error && (
        <p className="text-red-500 text-sm mt-1 font-medium">{String(error)}</p>
      )}
    </div>
  );
};

export default InputField;
