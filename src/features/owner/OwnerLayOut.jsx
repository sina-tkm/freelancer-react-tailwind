import AppLayOut from "../../style/ui/AppLayOut";
import CustomNavlink from "../../style/ui/CustomNavLink";
import SideBar from "../../style/ui/SideBar";
import { HiCollection, HiHome } from "react-icons/hi";

function OwnerLayOut() {
  return (
    <AppLayOut>
      <SideBar>
        <CustomNavlink to='dashboard'>
          <HiHome />
          <span>خانه</span>
        </CustomNavlink>

        <CustomNavlink to='projects'>
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavlink>
      </SideBar>
    </AppLayOut>
  );
}

export default OwnerLayOut;
