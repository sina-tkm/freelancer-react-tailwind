import { useState } from "react";
import SendOtpForm from "./SendOtpForm";
import CheckOtpForm from "./CheckOtpForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authservice";
import toast from "react-hot-toast";

function AthContainer() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");

  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: OtpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });
  const validatePhoneNumber = (phone) => {
    return phone.length === 11 && /^[0-9]+$/.test(phone);
  };

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(phoneNumber)) {
      toast.error("شماره تلفن نا معتبر");
      return;
    }
    try {
      const data = await mutateAsync({ phoneNumber });
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "مشکلی پیش آمده است.");
    } finally {
      setStep(2);
    }
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOtpForm
            setStep={setStep}
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onsubmit={sendOtpHandler}
            isSendingOtp={isSendingOtp}
          />
        );
      case 2:
        return (
          <CheckOtpForm
            OtpResponse={OtpResponse}
            phoneNumber={phoneNumber}
            onBack={() => setStep((s) => s - 1)}
            onResendOtp={sendOtpHandler}
          />
        );
      default:
        return null;
    }
  };
  return <div className='w-full sm:max-w-sm'>{renderStep()}</div>;
}

export default AthContainer;
