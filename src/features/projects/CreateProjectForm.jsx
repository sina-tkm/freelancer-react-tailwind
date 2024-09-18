import { TagsInput } from "react-tag-input-component";
import RHFSelect from "../../style/ui/RHFSelect";
import TextField from "../../style/ui/TextField";
import { useForm } from "react-hook-form";
import { useState } from "react";
import DatePickerField from "../../style/ui/DatePickerField";
import useCategories from "../../hooks/useCategory";
import useCreateProject from "./useCreateProject";
import Loading from "../../style/ui/Loading";
function CreateProjectForm({ onClose }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());
  const { transformCategories } = useCategories();
  const { isCreating, craeteProject } = useCreateProject();
  const onSubmit = async (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };
    craeteProject(newProject, {
      onSuccess: () => {
        onClose();
        reset();
      },
    });
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
      <RHFSelect
        label='دسته بندی'
        name='category'
        register={register}
        options={transformCategories}
      />
      <div>
        <label className='text-secondary-700 block'>تگ ها</label>
        <TagsInput value={tags} onChange={setTags} name='tags' />
      </div>
      <DatePickerField date={date} setDate={setDate} label='ددلاین' />

      <div className='!mt-8'>
        {isCreating ? (
          <Loading />
        ) : (
          <button type='submit' className='btn btn--primary w-full mt-2'>
            تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default CreateProjectForm;
