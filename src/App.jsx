import { useState } from "react";
import "./App.css";
import Button from "./Button";
import SideBar from "./SideBar";

function App() {
  return (
    <>
      {/* <Button
        RippleColor={"bg-red-500"}
        BgColor={"bg-black"}
        TextColor={"text-red-500"}
      >
        Click me
      </Button> */}
      <div className="flex">
        <div>
          <SideBar
            Name="Moaibi"
            src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1714868174/Portfolio/RESMOAIBI/s1okzium52134zpcetm9.png"
          ></SideBar>
        </div>

        <div className="lg:mx-[5%] mx-[10%]">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            reiciendis magnam quidem voluptas. Quo, quidem sed laborum inventore
            ullam ipsam a. Error, ipsa doloribus inventore at cumque iste non
            perspiciatis!
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
