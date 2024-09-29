import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogOut from "./useLogOut";
import Loading from "../../style/ui/Loading";

function Logout() {
  const { logout, isPending } = useLogOut();

  return isPending ? (
    <Loading />
  ) : (
    <button onClick={logout}>
      <HiArrowRightOnRectangle className='w-5 h-5 text-secondary-900 hover:text-error' />
    </button>
  );
}

export default Logout;
