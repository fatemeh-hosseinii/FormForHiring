import type { FieldError, UseFormRegister, RegisterOptions } from "react-hook-form";

interface NumberFieldProps {
  name: string;
  register: UseFormRegister<any>;
  validation?: RegisterOptions;
  error?: FieldError | string;
  label?: string;
  placeholder?: string;
  type?: "text" | "number";
}

const NumberField: React.FC<NumberFieldProps> = ({
  name,
  register,
  validation,
  error,
  label,
  placeholder,
  type = "number",
}) => (
  <div className="mb-4">
    {label && (
      <label htmlFor={name} className="block mb-1 font-semibold text-[23px]">
        {label}
      </label>
    )}
    <input
      id={name}
      type={type}
      {...register(name, validation)}
      placeholder={placeholder}
      className={`w-full p-2 border rounded ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && (
      <p className="text-red-500 text-sm mt-1">
        {typeof error === "string" ? error : error.message}
      </p>
    )}
  </div>
);

export default NumberField;
