import { NavLink } from "react-router-dom";

function CustomNavlink({ children, to }) {
  const navLinClasses =
    "flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900  rounded-lg p-2 p-y-1/5";
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? ` ${navLinClasses} bg-primary-100/80 text-primary-900 `
            : `${navLinClasses} text-secondary-600`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
export default CustomNavlink;
