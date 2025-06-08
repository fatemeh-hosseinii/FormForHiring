import InputField from "../InputField";
import NumberField from "../NumberField";
import { BsTrash2 } from "react-icons/bs";

type ExperienceRowProps = {
  index: number;
  register: any;
  errors: any;
  onRemove: () => void;
};

const ExperienceRow: React.FC<ExperienceRowProps> = ({
  index,
  register,
  errors,
  onRemove,
}) => {
  const rowErrors = errors.experiences?.[index] || {};

  return (
    <tr className="text-center hover:bg-gray-50 transition">
      <td className="border border-gray-300 p-2">
        <InputField
          name={`experiences.${index}.jobTitle`}
          register={register}
          errors={rowErrors}
          placeholder="مثلاً مدیر فروش"
        />
      </td>

      <td className="border border-gray-300 p-2">
        <InputField
          name={`experiences.${index}.company`}
          register={register}
          errors={rowErrors}
          placeholder="مثلاً شرکت الف"
        />
      </td>

      <td className="border border-gray-300 p-2">
        <NumberField
          name={`experiences.${index}.duration`}
          register={register}
          // errors={rowErrors}
          placeholder="مثلاً 12"
        />
      </td>

      <td className="border border-gray-300 p-2">
        <button
          type="button"
          onClick={onRemove}
          className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition"
          title="حذف سابقه"
        >
          <BsTrash2 size={18} />
        </button>
      </td>
    </tr>
  );
};

export default ExperienceRow;
