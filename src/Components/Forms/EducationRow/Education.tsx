import React from "react";
import InputField from "../InputField";
import NumberField from "../NumberField";
import type { UseFormRegister } from "react-hook-form";
import { FaTrash } from "react-icons/fa";

type EducationRowProps = {
  index: number;
  register: UseFormRegister<any>;
  errors: any;
  onRemove: () => void;
};

const EducationRow: React.FC<EducationRowProps> = ({
  index,
  register,
  errors,
  onRemove,
}) => {
  const currentErrors = errors.educations?.[index] || {};

  return (
    <div className="relative p-5 rounded-xl  bg-white border border-gray-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Remove Button */}
      <button
        type="button"
        onClick={onRemove}
        className="absolute top-4 left-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition shadow"
        aria-label="حذف سابقه"
      >
        <FaTrash size={14} />
      </button>

      {/* Degree */}
      <InputField
        name={`educations.${index}.degree`}
        register={register}
        errors={currentErrors}
        placeholder="مثلاً لیسانس"
        type="text"
        label="مقطع تحصیلی"
      />

      {/* Field of Study */}
      <InputField
        name={`educations.${index}.fieldOfStudy`}
        register={register}
        errors={currentErrors}
        placeholder="مثلاً مهندسی نرم‌افزار"
        type="text"
        label="رشته تحصیلی"
      />

     
      {/* Graduation Year */}
      <NumberField
        name={`educations.${index}.graduationYear`}
        register={register}
        placeholder="مثلاً 1402"
        label="سال فارغ‌التحصیلی"
      />

      {/* University Name - full width */}
      <div className="md:col-span-2">
        <InputField
          name={`educations.${index}.university`}
          register={register}
          errors={currentErrors}
          placeholder="مثلاً دانشگاه تهران"
          type="text"
          label="نام دانشگاه / مدرسه"
        />
      </div>
    </div>
  );
};

export default EducationRow;
