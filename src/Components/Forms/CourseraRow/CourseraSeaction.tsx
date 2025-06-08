import type {
  FieldErrors,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import CourseraRow from "./CourseraRow";
import type { FormValues } from "../../../types/type";

interface CourseraSectionProps {
  courseraField: { id: string }[];
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  appendCoursera: UseFieldArrayAppend<FormValues, "coursera">;
  removeCoursera: UseFieldArrayRemove;
}

const CourseraSection = ({
  courseraField,
  register,
  errors,
  appendCoursera,
  removeCoursera,
}: CourseraSectionProps) => {
  return (
    <div className="w-full bg-amber-100 mt-12 p-5 rounded-2xl">
      <h3 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-gray-200 pb-3">
        دوره‌های آموزشی طی شده:
      </h3>

      <table className="w-full border-collapse border border-gray-300 bg-white text-gray-800">
        <thead>
          <tr className="text-lg bg-amber-900 text-white">
            <th className="border p-3">نام موسسه</th>
            <th className="border p-3">از مورخه</th>
            <th className="border p-3">تا مورخه</th>
            <th className="border p-3">موضوع و مهارت کسب شده</th>
            <th className="border p-5">حذف</th>
          </tr>
        </thead>
        <tbody>
          {courseraField.map((field, index) => (
            <CourseraRow
              key={field.id}
              index={index}
              register={register}
              errors={errors.coursera?.[index] || {}}
              onRemove={() => removeCoursera(index)}
            />
          ))}
        </tbody>
      </table>

      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={() =>
            appendCoursera({
              institute: "",
              fromdate: "",
              todate: "",
              subjectCoursera: "",
            })
          }
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white  px-6 py-3 rounded-xl shadow-lg transition duration-300 ease-in-out hover:scale-105"
        >
          <FaPlus />
          <h1 className="text-[16px]">افزودن سابقه آموزشی</h1>
        </button>
      </div>
    </div>
  );
};

export default CourseraSection;
