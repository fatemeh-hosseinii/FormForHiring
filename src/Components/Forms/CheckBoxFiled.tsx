import type { FieldError, UseFormRegister } from "react-hook-form";

interface CheckboxFieldProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  validation?: object;
  error?: FieldError;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  label,
  name,
  register,
  validation,
  error,
}) => (
  <div className="mb-4 flex items-center gap-2">
    <input type="checkbox" {...register(name, validation)} />
    <label className="block text-[24px]  mb-1">{label}</label>
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

export default CheckboxField;
