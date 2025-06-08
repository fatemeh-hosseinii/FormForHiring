import {
  type FieldErrors,
  type UseFieldArrayAppend,
  type UseFieldArrayRemove,
  type UseFormRegister,
} from "react-hook-form";
import type { FormValues } from "../../../types/type";
import PersonalInfoRow from "./PersonalInfoRow";
import { FaPlus } from "react-icons/fa";

interface PersonalInfoSectionProps {
  personalInfoField: { id: string }[];
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  appendpersonalInfo: UseFieldArrayAppend<FormValues, "personalInfo">;
  removepersonalInfo: UseFieldArrayRemove;
}

const PersonalInfoSection = ({
  personalInfoField,
  register,
  errors,
  appendpersonalInfo,
  removepersonalInfo,
}: PersonalInfoSectionProps) => {
  return (
    <section className="w-full mt-12 bg-amber-100 p-6 md:p-10 rounded-2xl shadow-lg">
      <h3 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4 border-gray-300">
        اطلاعات فردی
      </h3>

      <div className="flex flex-col gap-8">
        {personalInfoField.map((field, index) => (
          <PersonalInfoRow
            key={field.id}
            index={index}
            register={register}
            errors={errors}
            onRemove={() => removepersonalInfo(index)}
          />
        ))}
      </div>


    </section>
  );
};

export default PersonalInfoSection;
