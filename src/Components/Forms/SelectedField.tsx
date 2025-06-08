import type { FieldError, UseFormRegister } from "react-hook-form";


interface SelectFieldProps {
  label: string;
  name: string;
  options: string[];
  register: UseFormRegister<any>;
  validation?: object;
  error?: FieldError;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  options = [],
  register,
  validation,
  error,
}) => (
  <div className="mb-4">
    <label className="block mb-1 text-[24px] font-medium">{label}</label>
    <select
      {...register(name, validation)}
      className="w-full border border-gray-300 p-2 rounded"
    >
      <option value="">انتخاب کنید</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

export default SelectField;
