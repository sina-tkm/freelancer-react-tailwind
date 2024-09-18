import TextField from "../../style/ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authservice";
import toast from "react-hot-toast";
import Loading from "../../style/ui/Loading";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../style/ui/RadioInputGroup";

function CompleteProfileForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const { message, user } = await mutateAsync(data);
      toast.success(message);

      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        return;
      }
      if (user.role === "OWNER") navigate("/owner");
      if (user.role === "FREELANCER") navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message || "مشکلی پیش آمده است.");
    }
  };

  return (
    <div className='flex  pt-10 flex-col gap-y-6 items-center'>
      <h1 className='font-bold text-3xl text-secondary-700'>تکمیل اطلاعات</h1>
      <div className='w-full sm:max-w-sm'>
        <form className='space-y-8' onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label='نام و نام خانوادگی'
            name='name'
            register={register}
            validationSchema={{
              required: "این فیلد ضروری است",
            }}
            errors={errors}
          />
          <TextField
            label='ایمیل'
            register={register}
            name='email'
            validationSchema={{
              required: "ایمیل ضروری است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل نامعتبر است",
              },
            }}
            errors={errors}
          />
          <div className='flex items-center justify-center gap-x-8'>
            <RadioInputGroup
              errors={errors}
              register={register}
              watch={watch}
              configs={{
                name: "role",
                validationSchema: { required: "انتخاب نقش ضروری است" },
                options: [
                  {
                    value: "OWNER",
                    label: "کارفرما",
                  },
                  { value: "FREELANCER", label: "فریلنسر" },
                ],
              }}
            />
          </div>
          {isPending ? (
            <Loading />
          ) : (
            <button className='btn btn--primary w-full'> تایید</button>
          )}
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
