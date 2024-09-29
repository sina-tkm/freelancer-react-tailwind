import { HiCollection, HiHome } from "react-icons/hi";
import CustomNavlink from "./CustomNavLink";

function SideBar({ children }) {
  const navLinClasses =
    "flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900  rounded-lg p-2 p-y-1/5";
  return (
    <div className='bg-secondary-0 row-start-1 row-span-2 border-l border-secondary-200 p-4'>
      <ul className='flex flex-col gap-y-4'>{children}</ul>
    </div>
  );
}

export default SideBar;
