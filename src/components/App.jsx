import { useState, useContext } from "react";
import "./App.css";
import { Button } from "./Button";
import { SideBar } from "./SideBar";
import { AppContex } from "./AppContex";
import { ButtonBar } from "./ButtonBar";
import { HomeIcon } from "./icons/HomeIcon";
import { ButtonDropDownBar } from "./ButtonDropDownBar";
import { DropDownOptions } from "./DropDownOptions";

function App() {
  return (
    <>
      <div className="flex   ">
        <SideBar
          Name="Moaibi"
          TxtColor={"text-white"}
          src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1714868174/Portfolio/RESMOAIBI/s1okzium52134zpcetm9.png"
          ButtonColor="bg-[#7c7787]"
        >
          <ButtonBar icon={<HomeIcon />} TxtColor={"text-white"}>
            Home
          </ButtonBar>
          <ButtonDropDownBar
            icon={<HomeIcon />}
            TxtColor={"text-white"}
            Name={"Product"}
          >
            <DropDownOptions TxtColor={"text-white"}>Product1</DropDownOptions>
            <DropDownOptions TxtColor={"text-white"}>Product2</DropDownOptions>
            <DropDownOptions TxtColor={"text-white"}>Product3</DropDownOptions>
            <DropDownOptions TxtColor={"text-white"}>Product4</DropDownOptions>
          </ButtonDropDownBar>
        </SideBar>

        <div className=" w-[85%] ">
          <div>
            <h1 className="md:text-center w-[100%] font-thin md:text-5xl text-4xl mt-5">
              sidebar-react-pro
            </h1>
          </div>

          <div className="md:max-w-3xl w-[100%] md:mx-auto md:px-4 md:py-8">
            <h2 className="text-3xl font-semibold mb-4">
              Modern and Responsive Sidebar
            </h2>

            <p className="text-lg mb-4">
              Welcome to our modern and responsive sidebar solution! Designed to
              adapt seamlessly across all devices and screen sizes, our sidebar
              enhances user experience by providing easy navigation and
              accessibility in various contexts.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Responsive Design:</strong> Ensures optimal viewing
                  and interaction experience on any device, from desktops to
                  mobile phones.
                </li>
                <li>
                  <strong>Sleek and Intuitive:</strong> Combines modern
                  aesthetics with intuitive functionality, making navigation
                  straightforward and enjoyable.
                </li>
                <li>
                  <strong>Customizable:</strong> Tailor the sidebar to fit your
                  application's unique design requirements effortlessly.
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-semibold mb-4">Sidebar props</h2>

            <pre className="bg-gray-100 p-4 rounded-md mb-8 overflow-scroll">
              <code className="language-javascript">
                {`import { SideBar } from "sidebar-react-pro";

function App() {
  return (
    <SideBar
      src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1714868174/Portfolio/RESMOAIBI/s1okzium52134zpcetm9.png"
      // URL for your company logo
      Name="Moaibi"
      // Name of your company
      ButtonColor="bg-[#a87abe]"
      // Background color of the sidebar toggle button (open/close button)
      BgColor="bg-[#1c1c1c]"
      // Background color of the sidebar; defaults to #1c1c1c if not specified
      BgImage="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713594373/Portfolio/kh7azy142fknzrmstqed.jpg"
      // URL for a background image to be used in the sidebar
    ></SideBar>
  );
}

export default App;`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
