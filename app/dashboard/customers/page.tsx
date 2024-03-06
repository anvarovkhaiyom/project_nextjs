import { useFormContext } from '@/app/ui/FormContext';
export default function Page(){
  const { formData } = useFormContext();
  return (
    <div>
      <h1>Customer Page</h1>
      <p>Username: {formData.email}</p>
      <p>Password: {formData.password}</p>
    </div>
  );
};
