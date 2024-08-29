import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authservice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import Loading from "../../style/ui/Loading";
const RESEND_INTIAL = 90;
function CheckOtpForm({ phoneNumber, onBack, onResendOtp, otpResponse }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_INTIAL);
  const navigate = useNavigate();
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  });
  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (user.isActive) {
        // push role page
      } else {
        navigate("/complete-profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div>
      <button>
        <HiArrowRight
          className='w-6 h-6  text-secondary-500'
          onClick={onBack}
        />
      </button>
      {otpResponse?.message && (
        <p className='flex items-center gap-x-4 my-4'>
          {otpResponse.message}
          <buttton onClick={onBack}>
            {" "}
            <CiEdit />
          </buttton>
        </p>
      )}
      <div className='mb-4 text-secondary-500'>
        {time > 0 ? (
          <p> {time} ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button onClick={onResendOtp}>ارسال مجدد کد</button>
        )}
      </div>
      <form className='space-y-8' onSubmit={checkOtpHandler}>
        <p className='font-bold text-secondary-800'>کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type='number' {...props} />}
          containerStyle='flex flex-row-reverse gap-x-2 justify-center '
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "2px solid rgb(var(--color-primary-300))",
            borderRadius: "16px",
          }}
        />
        {isPending ? (
          <Loading />
        ) : (
          <button className='btn btn--primary w-full'>تایید</button>
        )}
      </form>
    </div>
  );
}

export default CheckOtpForm;
