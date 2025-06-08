import React from "react";
import InputField from "../InputField";
import type { UseFormRegister } from "react-hook-form";
// import NumberField from "../NumberField";
import { FaTrash } from "react-icons/fa";
import NumberField from "../NumberField";

type CourseraRowProps = {
  index: number;
  register: UseFormRegister<any>;
  errors: any;
  onRemove: () => void;
};

const CourseraRow: React.FC<CourseraRowProps> = ({
  index,
  register,
  errors,
  onRemove,
}) => {
  return (
    <tr className="text-center">
      <td className="border border-gray-300 p-1">
        <InputField
          name={`coursera.${index}.institute`}
          register={register}
          errors={errors.experiences?.[index] || {}}
          placeholder="مثلا مدیر فروش"
          type="text"
        />
      </td>

      <td className="border border-gray-300 p-1">
        <InputField
          name={`coursera.${index}.fromdate`}
          register={register}
          errors={errors.experiences?.[index] || {}}
          placeholder="مثلا شرکت الف"
          type="text"
        />
      </td>

      <td className="border border-gray-300 p-1">
        <NumberField
          name={`coursera.${index}.todate`}
          register={register}
          // errors={errors.experiences?.[index] || {}}
          placeholder="مثلا 12"
          
        />
      </td>
      <td className="border border-gray-300 p-1">
        <NumberField
          name={`coursera.${index}.subjectCoursera`}
          register={register}
          // errors={errors.experiences?.[index] || {}}
          placeholder="مثلا 12"
          
        />
      </td>
      <td className="border border-gray-300 p-1">
        <button
          type="button"
          onClick={onRemove}
          className=""
        >
          <FaTrash className="text-red-600" size={20} />
          
        </button>
      </td>
    </tr>
  );
};

export default CourseraRow;
