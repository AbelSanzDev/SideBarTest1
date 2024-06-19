import { useState } from "react";
import Button from "./Button";
import CloseIconSvg from "./icons/CloseIcon";
import HomeIcon from "./icons/HomeIcon";
import ButtonDropDown from "./ButtonDropDown";

const SideBar = ({ children, Name = "", src = "", Icon = <HomeIcon /> }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleChangeDirection = () => {
    setIsOpen(!isOpen);
  };
  const handleChangeDirectionTrue = () => {
    setIsOpen(true);
  };
  return (
    <div
      className={` transition-all duration-500 ${
        isOpen ? "md:w-[550px] w-[20px]" : "lg:w-[190px] w-[20px]"
      } `}
    >
      <div className=" fixed">
        <div
          className={`${
            isOpen ? " lg:static relative" : "lg:static relative"
          } `}
        >
          <div className=" relative">
            <div className=" absolute md:-right-7 -right-4 mt-[1px] z-10">
              <Button
                onClick={() => {
                  handleChangeDirection();
                }}
                className={"bg-[#a87abe] text-white w-auto rounded-full "}
              >
                <CloseIconSvg isOpen={isOpen} />
              </Button>
            </div>
          </div>
          <div
            className={` transition-all duration-500 ${
              isOpen ? "w-[240px]" : "lg:w-[5rem] w-[1rem]"
            } h-svh bg-[#1c1c1c] ${
              isOpen ? " lg:static absolute" : "lg:static absolute"
            } overflow-scroll `}
          >
            <div className=" relative">
              <div
                className={` transition-all lg:block ${
                  isOpen ? "block" : "hidden"
                } `}
              >
                <div className="">
                  <div
                    className={` ${isOpen ? "mx-[10%]" : "mx-0"} ${
                      Name === "" && src === ""
                        ? ""
                        : "border-b border-gray-500 pt-5"
                    }  `}
                  >
                    <div className="grid place-items-center">
                      {src === "" ? null : (
                        <>
                          <img
                            className={` transition-all duration-500 ${
                              isOpen ? "w-[7rem]" : "w-[4rem]"
                            }   pt-4`}
                            src={src}
                            alt="Logo"
                          />
                        </>
                      )}
                      {Name === "" ? null : (
                        <>
                          <h1
                            className={` transition-all duration-500 text-white ${
                              isOpen ? "text-3xl" : "text-md"
                            }  font-thin mb-4`}
                          >
                            {Name}
                          </h1>
                        </>
                      )}
                    </div>
                  </div>
                  {/**Button--nav */}
                  <div className="">
                    <div className="mt-4 pl-0 ">
                      {children}
                      <div>
                        <Button
                          className={
                            "w-[100%] pl-5 text-2xl font-thin bg-transparent rounded-md text-white"
                          }
                          StartSvg={isOpen ? <HomeIcon /> : null}
                        >
                          {isOpen ? "Inicio" : <HomeIcon />}
                        </Button>
                      </div>
                      <div>
                        <ButtonDropDown
                          className={
                            "w-[100%] pl-5 text-2xl font-thin text-white rounded-md"
                          }
                          BgColor={"bg-[#0c0c0c83]"}
                          StartSvg={isOpen ? <HomeIcon /> : null}
                          isOpen={isOpen}
                          handleChangeDirectionTrue={handleChangeDirectionTrue}
                        >
                          {isOpen ? "Products" : <HomeIcon />}
                          {/**Solucion para poder pasa productos es pasar el Name de ese drop como un prop */}
                        </ButtonDropDown>
                        <ButtonDropDown
                          className={
                            "w-[100%] pl-5 text-2xl font-thin text-white rounded-md"
                          }
                          BgColor={"bg-[#0c0c0c83]"}
                          StartSvg={isOpen ? <HomeIcon /> : null}
                          isOpen={isOpen}
                          handleChangeDirectionTrue={handleChangeDirectionTrue}
                        >
                          {isOpen ? "Products" : <HomeIcon />}
                        </ButtonDropDown>
                        <ButtonDropDown
                          className={
                            "w-[100%] pl-5 text-2xl font-thin text-white rounded-md"
                          }
                          BgColor={"bg-[#0c0c0c83]"}
                          StartSvg={isOpen ? <HomeIcon /> : null}
                          isOpen={isOpen}
                          handleChangeDirectionTrue={handleChangeDirectionTrue}
                        >
                          {isOpen ? "Products" : <HomeIcon />}
                        </ButtonDropDown>
                        <ButtonDropDown
                          className={
                            "w-[100%] pl-5 text-2xl font-thin text-white rounded-md"
                          }
                          BgColor={"bg-[#0c0c0c83]"}
                          StartSvg={isOpen ? <HomeIcon /> : null}
                          isOpen={isOpen}
                          handleChangeDirectionTrue={handleChangeDirectionTrue}
                        >
                          {isOpen ? "Products" : <HomeIcon />}
                        </ButtonDropDown>
                        <ButtonDropDown
                          className={
                            "w-[100%] pl-5 text-2xl font-thin text-white rounded-md"
                          }
                          BgColor={"bg-[#0c0c0c83]"}
                          StartSvg={isOpen ? <HomeIcon /> : null}
                          isOpen={isOpen}
                          handleChangeDirectionTrue={handleChangeDirectionTrue}
                        >
                          {isOpen ? "Products" : <HomeIcon />}
                        </ButtonDropDown>
                        <ButtonDropDown
                          className={
                            "w-[100%] pl-5 text-2xl font-thin text-white rounded-md"
                          }
                          BgColor={"bg-[#0c0c0c83]"}
                          StartSvg={isOpen ? <HomeIcon /> : null}
                          isOpen={isOpen}
                          handleChangeDirectionTrue={handleChangeDirectionTrue}
                        >
                          {isOpen ? "Products" : <HomeIcon />}
                        </ButtonDropDown>
                        <ButtonDropDown
                          className={
                            "w-[100%] pl-5 text-2xl font-thin text-white rounded-md"
                          }
                          BgColor={"bg-[#0c0c0c83]"}
                          StartSvg={isOpen ? <HomeIcon /> : null}
                          isOpen={isOpen}
                          handleChangeDirectionTrue={handleChangeDirectionTrue}
                        >
                          {isOpen ? "Products" : <HomeIcon />}
                        </ButtonDropDown>
                        <ButtonDropDown
                          className={
                            "w-[100%] pl-5 text-2xl font-thin text-white rounded-md"
                          }
                          BgColor={"bg-[#0c0c0c83]"}
                          StartSvg={isOpen ? <HomeIcon /> : null}
                          isOpen={isOpen}
                          handleChangeDirectionTrue={handleChangeDirectionTrue}
                        >
                          {isOpen ? "Products" : <HomeIcon />}
                        </ButtonDropDown>
                      </div>
                    </div>
                  </div>
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
