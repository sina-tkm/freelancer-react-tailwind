import AppLayOut from "../style/ui/AppLayOut";
import CustomNavlink from "../style/ui/CustomNavLink";
import SideBar from "../style/ui/SideBar";
import { HiCollection, HiHome } from "react-icons/hi";

function OwnerLayOut() {
  return (
    <div>
      <AppLayOut>
        <SideBar>
          <CustomNavlink to='/owner/dashboard'>
            <HiHome />
            <span>خانه</span>
          </CustomNavlink>

          <CustomNavlink to='/owner/projects'>
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavlink>
        </SideBar>
      </AppLayOut>
    </div>
  );
}

export default OwnerLayOut;
