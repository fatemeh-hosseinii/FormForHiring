import { type FieldErrors, type UseFieldArrayAppend, type UseFieldArrayRemove, type UseFormRegister } from "react-hook-form";
import type { FormValues } from "../../../types/type";
import ExperienceRow from "./ExperienceRow";
import { FaPlus } from "react-icons/fa";

type Props = {
  experienceFields: { id: string }[];
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  appendExperience: UseFieldArrayAppend<FormValues, "experiences">;
  removeExperience: UseFieldArrayRemove;
};

const ExperienceSection = ({
  experienceFields,
  register,
  errors,
  appendExperience,
  removeExperience,
}: Props) => {
  return (
    <div className="w-full mt-12 bg-amber-100 p-6 rounded-2xl shadow-md">
      <h3 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3 border-gray-300">
        سوابق شغلی:
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white text-gray-800 rounded-xl overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-amber-800 text-white text-lg">
              <th className="border p-3">عنوان شغلی</th>
              <th className="border p-3">شرکت</th>
              <th className="border p-3">مدت زمان (ماه)</th>
              <th className="border p-3">حذف</th>
            </tr>
          </thead>
          <tbody className="text-base">
            {experienceFields.map((field, index) => (
              <ExperienceRow
                key={field.id}
                index={index}
                register={register}
                errors={errors}
                onRemove={() => removeExperience(index)}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={() =>
            appendExperience({
              jobTitle: "",
              company: "",
              duration: 0,
            })
          }
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
        >
          <FaPlus size={18} />
          <span className="text-[16px] font-medium">افزودن سابقه شغلی</span>
        </button>
      </div>
    </div>
  );
};

export default ExperienceSection;
