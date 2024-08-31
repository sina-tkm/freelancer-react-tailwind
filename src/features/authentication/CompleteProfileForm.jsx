import { useState } from "react";
import TextField from "../../style/ui/TextField";
import InputRadio from "../../style/ui/InputRadio";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authservice";
import toast from "react-hot-toast";
import Loading from "../../style/ui/Loading";
import { useNavigate } from "react-router-dom";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ name, role, email });
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
    <div className='flex justify-center pt-10'>
      <div className='w-full sm:max-w-sm'>
        <form className='space-y-8' onSubmit={handleSubmit}>
          <TextField
            label='نام و نام خانوادگی'
            value={name}
            name='name'
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label='ایمیل'
            value={email}
            name={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className='flex items-center justify-center gap-x-8'>
            <InputRadio
              name='role'
              value='OWNER'
              onChange={(e) => setRole(e.target.value)}
              label='کارفرما'
              id='OWNER'
              checked={role === "OWNER"}
            />
            <InputRadio
              name='role'
              onChange={(e) => setRole(e.target.value)}
              value='FREELANCER'
              label='فریلنسر'
              id='FREELANCER'
              checked={role === "FREELANCER"}
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
