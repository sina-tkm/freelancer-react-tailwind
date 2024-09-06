import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

function AppLayOut() {
  return (
    <div className='grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]'>
      <Header />
      <SideBar /> 
      <div className='bg-secondary-100 p-8 overflow-y-auto'>
        <div className='mx-auto max-w-screen-lg flex flex-col gap-y-12'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayOut;
