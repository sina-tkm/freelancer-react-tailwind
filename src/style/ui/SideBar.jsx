import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function SideBar() {
  const navLinClasses =
    "flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900  rounded-lg p-2 p-y-1/5";
  return (
    <div className='bg-secondary-0 row-start-1 row-span-2 border-l border-secondary-200 p-4'>
      <ul className='flex flex-col gap-y-4'>
        <li>
          <NavLink
            to='/owner/dashboard'
            className={({ isActive }) =>
              isActive
                ? ` ${navLinClasses} bg-primary-100/50 text-primary-900 `
                : `${navLinClasses} text-secondary-600`
            }
          >
            <HiHome />
            <span>خانه</span>
          </NavLink>
        </li>
        <li>
          <CustomNavlink to='/owner/projects'>
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavlink>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;

function CustomNavlink({ children, to }) {
  const navLinClasses =
    "flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900  rounded-lg p-2 p-y-1/5";
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? ` ${navLinClasses} bg-primary-100/50 text-primary-900 `
          : `${navLinClasses} text-secondary-600`
      }
    >
      {children}
    </NavLink>
  );
}
