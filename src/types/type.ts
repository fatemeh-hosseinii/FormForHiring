import type { UseFormRegister } from "react-hook-form";

export type Experience = {
  jobTitle: string;
  company: string;
  duration: number;
};

export type Education = {
  degree: string;
  field: string;
  grade: string;
  graduationYear: string;
  institution: string;
};
export type Coursera = {
  institute:string,
  fromdate:Number ,
  todate:Number,
  subjectCoursera:string

};
export type  ExperienceArticle= {
  FromSent:string,
  ToSent:string  
  subject:string,
};
export type FormValues = {
  fullName: string;
  experiences: Experience[];
  education: Education[];
  experienceArticle:ExperienceArticle[]
  coursera:Coursera[]
  personalInfo:PersonalInfo[]
};
export type PersonalInfo = {
  name: string;
  fathersName:string,
  addressEmail: string;
  addressHome:string
  IdentityCart:Number;
  uniSEx:string;
  berth:Number
  phoneNum: Number;
  city:string;
  jobOffer:string;
}
export type InputFieldProps = {
  name: string;
  register: UseFormRegister<any>;
  errors: any;
  label?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
};
