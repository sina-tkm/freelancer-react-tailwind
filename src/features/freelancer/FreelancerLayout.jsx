import AppLayOut from "../../style/ui/AppLayOut";
import CustomNavlink from "../../style/ui/CustomNavLink";
import SideBar from "../../style/ui/SideBar";
import { HiCollection, HiHome } from "react-icons/hi";

function FreelancerLayout() {
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
        <CustomNavlink to='proposals'>
          <HiCollection />
          <span>پروپوزال ها</span>
        </CustomNavlink>
      </SideBar>
    </AppLayOut>
  );
}

export default FreelancerLayout;
