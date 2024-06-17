import { useState } from "react";
import Button from "./Button";
import CloseIconSvg from "./icons/CloseIcon";
import HomeIcon from "./icons/HomeIcon";
import ButtonDropDown from "./ButtonDropDown";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleChangeDirection = () => {
    setIsOpen(!isOpen);
  };
  const handleChangeDirectionTrue = () => {
    setIsOpen(true);
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
          <div className=" absolute -right-7 mt-[1px]">
            <Button
              onClick={() => {
                handleChangeDirection();
              }}
              className={"bg-[#a87abe] text-white w-auto rounded-full"}
            >
              <CloseIconSvg isOpen={isOpen} />
            </Button>
          </div>
          <div>
            <div
              className={` ${
                isOpen ? "mx-[10%]" : "mx-0"
              }  border-b border-gray-500 pt-5 `}
            >
              <div className="grid place-items-center">
                <img
                  className={` transition-all duration-500 ${
                    isOpen ? "w-[7rem]" : "w-[4rem]"
                  }   pt-4`}
                  src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1714868174/Portfolio/RESMOAIBI/s1okzium52134zpcetm9.png"
                  alt=""
                />
                <h1
                  className={` transition-all duration-500 text-white ${
                    isOpen ? "text-3xl" : "text-md"
                  }  font-thin mb-4`}
                >
                  Moaibi
                </h1>
              </div>
            </div>
            {/**Button--nav */}
            {isOpen ? (
              <>
                <div className="mt-4 pl-4">
                  <div>
                    <Button
                      className={
                        "w-[92%] text-2xl font-thin bg-transparent rounded-md text-white"
                      }
                      StartSvg={<HomeIcon />}
                    >
                      Inicio
                    </Button>
                  </div>
                  <div>
                    <ButtonDropDown
                      className={
                        "w-[92%] text-2xl font-thin text-white rounded-md"
                      }
                      BgColor={"bg-[#0c0c0c83]"}
                      StartSvg={<HomeIcon />}
                      isOpen={isOpen}
                    >
                      Products
                    </ButtonDropDown>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="mt-4 ml-3">
                  <div>
                    <Button
                      className={
                        " text-2xl font-thin bg-transparent rounded-md text-white"
                      }
                    >
                      <HomeIcon />
                    </Button>
                  </div>
                  <div>
                    <ButtonDropDown
                      className={" text-2xl font-thin text-white rounded-md"}
                      BgColor={"bg-[#0c0c0c83]"}
                      handleChangeDirectionTrue={handleChangeDirectionTrue}
                    >
                      <HomeIcon />
                    </ButtonDropDown>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
