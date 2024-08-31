import { HiArrowRight } from "react-icons/hi";
import useNavigteBack from "../../services/useMoveBack";
function NotFound() {
  const moveBack = useNavigteBack();

  return (
    <div className='sm:max-w-sm flex justify-center items-center pt-10'>
      <div>
        <h1 className='text-xl font-bold text-secondary-700 mb-8 '>
          صفحه مورد نظر یافت نشد
        </h1>

        <button onClick={moveBack} className='flex items-center gap-x-4'>
          <HiArrowRight />
          <span className='w-6 h-6 text-primary-900'>بازگشت</span>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
