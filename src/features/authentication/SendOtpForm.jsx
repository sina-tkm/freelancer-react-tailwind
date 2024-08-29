import TextField from "../../style/ui/TextField";
import Loading from "../../style/ui/Loading";

function SendOtpForm({ phoneNumber, onChange, onsubmit, isSendingOtp }) {
  return (
    <div>
      <div>
        <form className='space-y-8' onSubmit={onsubmit}>
          <TextField
            name='phonenumber'
            label='شماره تماس '
            value={phoneNumber}
            onChange={onChange}
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
