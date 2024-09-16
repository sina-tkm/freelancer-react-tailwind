import TextField from "../../style/ui/TextField";
import Loading from "../../style/ui/Loading";

function SendOtpForm({ register, onsubmit, isSendingOtp }) {
  return (
    <div>
      <div>
        <form className='space-y-8' onSubmit={onsubmit}>
          <TextField
            name='phoneNumber'
            label='شماره تماس '
            register={register}
          />
          {isSendingOtp ? (
            <Loading />
          ) : (
            <button type='submit' className='btn btn--primary w-full '>
              ارسال کد تایید
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default SendOtpForm;
