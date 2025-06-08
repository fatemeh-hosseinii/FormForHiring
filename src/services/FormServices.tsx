import axios from "axios";


export interface SubmissionData {
  [key: string]: string | boolean;
}



export const submitForm = async (formData: SubmissionData): Promise<SubmissionData> => {
  const response = await axios.post<SubmissionData>(`http://localhost:3004/submissions`, formData);
  return response.data;
};
