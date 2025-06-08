import InputField from "../InputField";
import { BsTrash2 } from "react-icons/bs";
import { type FieldErrors, type UseFormRegister } from "react-hook-form";
import type { FormValues } from "../../../types/type";

interface PersonalInfoRowProps {
  index: number;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  onRemove: () => void;
}

const PersonalInfoRow = ({
  index,
  register,
  errors,
  onRemove,
}: PersonalInfoRowProps) => {
  const rowErrors = errors.personalInfo?.[index] || {};

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-200 space-y-6">
      {/* گروه ۱: اطلاعات هویتی */}
      <div>
        <h4 className="text-2xl  text-gray-700 mb-3 ">اطلاعات هویتی</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <InputField
            name={`personalInfo.${index}.name`}
            register={register}
            errors={rowErrors}
            placeholder="نام"
          />
          <InputField
            name={`personalInfo.${index}.fathersName`}
            register={register}
            errors={rowErrors}
            placeholder="نام پدر"
          />
          <InputField
            name={`personalInfo.${index}.IdentityCart`}
            register={register}
            errors={rowErrors}
            placeholder="کد ملی / شناسنامه"
          />
          <InputField
            name={`personalInfo.${index}.uniSEx`}
            register={register}
            errors={rowErrors}
            placeholder="جنسیت"
          />
          <InputField
            name={`personalInfo.${index}.berth`}
            register={register}
            errors={rowErrors}
            placeholder="تاریخ تولد"
          />
          <InputField
            name={`personalInfo.${index}.city`}
            register={register}
            errors={rowErrors}
            placeholder="شهر"
          />
        </div>
      </div>

      {/* گروه ۲: اطلاعات تماس */}
      <div>
        <h4 className="text-2xl  text-gray-700 mb-3 ">اطلاعات تماس</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <InputField
            name={`personalInfo.${index}.phoneNumber`}
            register={register}
            errors={rowErrors}
            placeholder="شماره تماس"
          />
          <InputField
            name={`personalInfo.${index}.addressEmail`}
            register={register}
            errors={rowErrors}
            placeholder="آدرس ایمیل"
          />
          <InputField
            name={`personalInfo.${index}.addressHome`}
            register={register}
            errors={rowErrors}
            placeholder="آدرس منزل"
          />
        </div>
      </div>

      {/* گروه ۳: اطلاعات شغلی */}
      <div className="mt-5">
        <h4 className="text-2xl  text-gray-700 mb-3 ">اطلاعات شغلی</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <InputField
            name={`personalInfo.${index}.jobOffer`}
            register={register}
            errors={rowErrors}
            placeholder="شغل پیشنهادی"
          />
        </div>
      </div>

     
    </div>
  );
};

export default PersonalInfoRow;
