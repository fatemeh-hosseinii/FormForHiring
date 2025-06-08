import { useForm, useFieldArray } from "react-hook-form";
import { submitForm } from "../../services/FormServices";
import type { FormValues } from "../../types/type";
import { DevTool } from "@hookform/devtools";
import EducationSection from "./EducationRow/EducationSection";
import ExperienceArticleSection from "./ExperienceArticleRow/ExperienceArticleSection";
import CourseraSection from "./CourseraRow/CourseraSeaction";
import logo from "../../../public/images/Forms-pana.svg"
import ExperienceSection from "./ExperienceRow/ExperienceSection";
import PersonalInfoSection from "./PersonalInfoRow/PersonalInfoSec";
const DynamicFormTable = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      experiences: [{ jobTitle: "", company: "", duration: 0 }],
      education: [{ degree: "", field: "", grade: "", graduationYear: "", institution: "" }],
      coursera:[{institute:"",fromdate:"",todate:"",subjectCoursera:""}],
      personalInfo: [{ name:"",fathersName:"",addressEmail: "",addressHome:"",IdentityCart:"",uniSEx:"",berth:"",phoneNum:"",city:"" ,jobOffer:""}],
    },
  });

  const {
    fields: experienceFields,
    append: appendExperience,
    remove: removeExperience,
  } = useFieldArray({
    control,
    name: "experiences",
  });

  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: "education",
  });


  const {
    fields: educationArticleFields,
    append: appendEducationArticle,
    remove: removeEducationArticle,
  } = useFieldArray({
    control,
    name: "experienceArticle",
  });
 
  
const {
  fields:courseraField,
  append:appendCoursera,
  remove:removeCoursera
}=useFieldArray({
  control,
  name: "coursera",
})
console.log(courseraField);

const {
  fields:personalInfoField,
  append:appendpersonalInfo,
  remove:removepersonalInfo
}=useFieldArray({
  control,
  name: "personalInfo",
})

  const onSubmit = async (data: any) => {
    await submitForm(data);
    alert("فرم با موفقیت ارسال شد");
  };

  return (
    <div className="flex flex-col justify-center items-center  ">


      <div className="flex flex-col gap-3 w-[100%] justify-center items-center">
        <img className="w-[40%]" src={logo} alt="" />
        <h1 className="text-4xl font-bold">فرم <span className="text-amber-600 mt-4">استخدامی</span></h1>
      </div>
    <form onSubmit={handleSubmit(onSubmit)} className="lg:w-[60%] w-[100%] ">

      <PersonalInfoSection
        personalInfoField={personalInfoField}
        register={register}
        errors={errors}
        appendpersonalInfo={appendpersonalInfo}
        removepersonalInfo={removepersonalInfo}
      />
      {/* سوابق شغلی */}
      <ExperienceSection
        experienceFields={experienceFields}
        register={register}
        errors={errors}
        appendExperience={appendExperience}
        removeExperience={removeExperience}
      />
      {/* سوابق تحصیلی */}
      <EducationSection
        educationFields={educationFields}
        register={register}
        errors={errors}
        appendEducation={appendEducation}
        removeEducation={removeEducation}
      />
      {/* سوابق تحقیقاتی */}
     <ExperienceArticleSection
        educationArticleFields={educationArticleFields}
        register={register}
        errors={errors}
        appendEducationArticle={appendEducationArticle}
        removeEducationArticle={removeEducationArticle}
      />

      {/*  دوره های اموزشی طی شده */}
        <CourseraSection
          courseraField={courseraField}
          register={register}
          errors={errors}
          appendCoursera={appendCoursera}
          removeCoursera={removeCoursera}
        />
      {/* دکمه ارسال */}
      <button
        type="submit"
        className="mt-6 w-full bg-blue-600 text-white py-3 rounded text-lg font-semibold hover:bg-blue-800"
      >
        ارسال فرم
      </button>
       <DevTool control={control} /> 
    </form>
    </div>
  
  );
};

export default DynamicFormTable;
