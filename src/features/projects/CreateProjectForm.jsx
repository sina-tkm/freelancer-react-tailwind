import TextField from "../../style/ui/TextField";
import { useForm } from "react-hook-form";

function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className='' onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label='عنوان پروژه'
        name='title'
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 10,
            message: "طول عنوان نامعتبر است",
          },
        }}
        errors={errors}
      />
      <TextField
        label=' توضیحات'
        name='description'
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
        }}
        errors={errors}
      />
      <TextField
        label='بودجه'
        name='budget'
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
        }}
        errors={errors}
      />
      <button type='submit' className='btn btn--primary w-full mt-2'>
        تایید
      </button>
    </form>
  );
}

export default CreateProjectForm;
