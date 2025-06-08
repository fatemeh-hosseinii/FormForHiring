import type { UseFormRegister } from "react-hook-form";
import InputField from "../InputField";
import { FaTrash } from "react-icons/fa";

type ExperienceArticleRowProps = {
  index: number;
  register: UseFormRegister<any>;
  errors: any;
  onRemove: () => void;
};

const ExperienceArticleRow: React.FC<ExperienceArticleRowProps> = ({
  index,
  register,
  errors,
  onRemove,
}) => {
  const currentErrors = errors.experienceArticle?.[index] || {};

  return (
    <div className="flex flex-col md:flex-row md:items-end gap-6 bg-white border border-gray-300 p-6 rounded-lg shadow-md">
      
      {/* From Year */}
      <div className="flex-1 min-w-[130px]">
        <InputField
          name={`experienceArticle.${index}.FromSent`}
          register={register}
          errors={currentErrors}
          placeholder="مثلاً 1398"
          type="text"
          label="از سال"
        />
      </div>

      {/* To Year */}
      <div className="flex-1 min-w-[130px]">
        <InputField
          name={`experienceArticle.${index}.ToSent`}
          register={register}
          errors={currentErrors}
          placeholder="مثلاً 1402"
          type="text"
          label="تا سال"
        />
      </div>

      {/* Subject */}
      <div className="flex-[2] min-w-[220px]">
        <InputField
          name={`experienceArticle.${index}.subject`}
          register={register}
          errors={currentErrors}
          placeholder="موضوع تحقیق"
          type="text"
          label="موضوع"
        />
      </div>

      {/* Delete Button */}
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={onRemove}
          aria-label="حذف"
          className="flex items-center justify-center gap-1 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 transition-shadow shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          <FaTrash size={18} />
        </button>
      </div>
    </div>
  );
};

export default ExperienceArticleRow;
