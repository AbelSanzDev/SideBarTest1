import { useState } from "react";
import Button from "./Button";
import CloseIconSvg from "./icons/CloseIcon";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleChangeDirection = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`${isOpen ? " lg:static relative" : "lg:static relative"}`}>
      <div
        className={` transition-all duration-500 ${
          isOpen ? "w-[15rem]" : "lg:w-[5rem] w-[1rem]"
        } h-[100vh] bg-[#1c1c1c] ${
          isOpen ? " lg:static absolute" : "lg:static absolute"
        } `}
      >
        <div className=" relative">
          <div className=" absolute -right-7 mt-2">
            <Button
              onClick={() => {
                handleChangeDirection();
              }}
            >
              <CloseIconSvg isOpen={isOpen} />
            </Button>
          </div>
          <div>
            <div className="grid place-items-center">
              <img
                className="w-[7rem] pl-2 pt-4"
                src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1714868174/Portfolio/RESMOAIBI/s1okzium52134zpcetm9.png"
                alt=""
              />
              <h1 className="text-white text-3xl font-thin mb-4">Moaibi</h1>
              <div className="w-[90%] border-b border-gray-500 "></div>
              {/**Button--nav */}
              <div className="mt-4">
                <div>
                  <Button>Hola</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
