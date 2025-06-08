import type {
  FieldErrors,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import type { FormValues } from "../../../types/type";
import EducationRow from "./Education";
import { FaPlus } from "react-icons/fa";

interface Props {
  educationFields: { id: string }[];
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  appendEducation: UseFieldArrayAppend<FormValues, "education">;
  removeEducation: UseFieldArrayRemove;
}

const EducationSection = ({
  educationFields,
  register,
  errors,
  appendEducation,
  removeEducation,
}: Props) => {
  return (
    <div className="w-[100%] bg-[#FEF3C6]  mt-12 p-5 rounded-2xl">
      <h3 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-gray-200 pb-3">
        سوابق تحصیلی
      </h3>

      <div className="flex flex-col gap-5  mt-3">
        {educationFields.map((field, index) => (
          <div
            key={field.id}
            className=" rounded-xl shadow border border-gray-200 p-5 bg-amber-50"
          >
            <EducationRow
              index={index}
              register={register}
              errors={errors}
              onRemove={() => removeEducation(index)}
            />
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button
          type="button"
          onClick={() =>
            appendEducation({
              degree: "",
              field: "",
              grade: "",
              graduationYear: "",
              institution: "",
            })
          }
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-300 ease-in-out hover:scale-105"
        >
          <FaPlus className="text-lg" />
          افزودن سابقه تحصیلی
        </button>
      </div>
    </div>
  );
};

export default EducationSection;
