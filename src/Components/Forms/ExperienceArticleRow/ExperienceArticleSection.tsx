import type {
  FieldErrors,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import type { FormValues } from "../../../types/type";
import ExperienceArticleRow from "./ExperienceArticleRow";
import { FaPlus } from "react-icons/fa";

interface ExperienceArticleSectionProps {
  educationArticleFields: { id: string }[];
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  appendEducationArticle: UseFieldArrayAppend<FormValues, "experienceArticle">;
  removeEducationArticle: UseFieldArrayRemove;
}

const ExperienceArticleSection = ({
  educationArticleFields,
  register,
  errors,
  appendEducationArticle,
  removeEducationArticle,
}: ExperienceArticleSectionProps) => {
  return (
    <div className="w-[100%] bg-amber-100 mt-12 p-5 rounded-2xl">
      <h3 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-gray-200 pb-3">
        سوابق مطالعاتی و تحقیقاتی
      </h3>

      <div className="space-y-6">
        {educationArticleFields.map((field, index) => (
          <div
            key={field.id}
            className="bg-white rounded-xl shadow border border-gray-200 p-5"
          >
            <ExperienceArticleRow
              index={index}
              register={register}
              errors={errors}
              onRemove={() => removeEducationArticle(index)}
            />
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button
          type="button"
          onClick={() =>
            appendEducationArticle({ FromSent: "", ToSent: "", subject: "" })
          }
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-300 ease-in-out hover:scale-105"
        >
          <FaPlus className="text-lg" />
          افزودن سابقه تحقیقاتی
        </button>
      </div>
    </div>
  );
};

export default ExperienceArticleSection;
