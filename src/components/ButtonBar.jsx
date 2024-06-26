import { useContext } from "react";
import { AppContex } from "./AppContex";
import { HomeIcon } from "./icons/HomeIcon";
import { Button } from "./Button";
import SidebarClose from "./SidebarClose";

export const ButtonBar = ({ children, icon = "", TxtColor, onClick }) => {
  const { isOpen } = useContext(AppContex);
  return (
    <SidebarClose>
      <Button
        onClick={onClick}
        className={`w-[100%] pl-5 text-2xl font-thin bg-transparent rounded-md ${TxtColor}`}
        StartSvg={isOpen ? icon : null}
      >
        {isOpen ? children : icon === "" ? <HomeIcon /> : icon}
      </Button>
    </SidebarClose>
  );
};
