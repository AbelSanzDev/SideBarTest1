import { useState, useContext } from "react";
import "./App.css";
import Button from "./Button";
import SideBar from "./SideBar";
import AppContex from "./AppContex";
import ButtonBar from "./ButtonBar";
import HomeIcon from "./icons/HomeIcon";
import ButtonDropDownBar from "./ButtonDropDownBar";
import DropDownOptions from "./DropDownOptions";

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
      <div className="flex gap-5 h-[200rem]">
        <SideBar
          Name="Moaibi"
          src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1714868174/Portfolio/RESMOAIBI/s1okzium52134zpcetm9.png"
        >
          <ButtonBar icon={<HomeIcon />}>Home</ButtonBar>
          <ButtonDropDownBar icon={<HomeIcon />} Name={"Producto"}>
            <DropDownOptions>Producto1</DropDownOptions>
            <DropDownOptions>Producto1</DropDownOptions>
            <DropDownOptions>Producto1</DropDownOptions>
            <DropDownOptions>Producto1</DropDownOptions>
          </ButtonDropDownBar>
        </SideBar>

        <div className="">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            reiciendis magnam quidem voluptas. Quo, quidem sed laborum inventore
            ullam ipsam a. Error, ipsa doloribus inventore at cumque iste non
            perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Facilis repellat perferendis deserunt aliquid id similique
            veritatis tempore voluptatum placeat numquam nostrum dicta quod, ab
            voluptate sint dolore odit fugiat ullam?
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
