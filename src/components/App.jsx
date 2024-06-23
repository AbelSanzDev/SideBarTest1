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
  const [imgBg, setImgBg] = useState(false);
  const handleImage = () => {
    setImgBg(true);
  };
  const handleBg = () => {
    setImgBg(false);
  };
  return (
    <>
      <div className="flex">
        <SideBar
          Name="Moaibi"
          TxtColor={"text-white"}
          src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1714868174/Portfolio/RESMOAIBI/s1okzium52134zpcetm9.png"
          ButtonColor="bg-[#7c7787]"
          BgImage={`${
            imgBg
              ? "https://res.cloudinary.com/dcqvg21nk/image/upload/v1713594373/Portfolio/kh7azy142fknzrmstqed.jpg"
              : ""
          }`}
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
          <div className="">
            <div className=" lg:relative lg:bottom-0 lg:right-0 fixed bottom-24 right-44">
              <div className=" absolute left-1 flex items-center gap-2 justify-center lg:block    bg-[#1c1c1ce2] rounded-md p-2">
                <Button
                  onClick={() => handleImage()}
                  className={"text-white w-full rounded-md bg-indigo-400"}
                >
                  Image
                </Button>
                <Button
                  onClick={() => handleBg()}
                  className={
                    "text-white w-full rounded-md bg-indigo-400 lg:mt-2"
                  }
                >
                  BgColor
                </Button>
              </div>
            </div>
          </div>

          <div className="md:max-w-3xl w-[100%] md:mx-auto md:px-4 py-8">
            <div>
              <h1 className="text-2xl font-bold">
                Modern and Responsive Sidebar
              </h1>
              <p>
                Welcome to our modern and responsive sidebar solution! Designed
                to adapt seamlessly across all devices and screen sizes, our
                sidebar enhances user experience by providing easy navigation
                and accessibility in various contexts.
              </p>

              <h2 className="text-xl font-bold">Key Features:</h2>
              <ul className=" list-disc ml-7">
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

              <h2 className="text-2xl font-bold mt-5">main.jsx || main.js</h2>
              <p>
                You need the SidebarProvider in your main file for the
                application to work.
              </p>
              <pre className=" bg-stone-100 rounded-md p-2 overflow-scroll mt-5">
                <code>
                  {`import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SidebarProvider } from "./components/SidebarProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* This is the component that you need */}
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </React.StrictMode>
);
`}
                </code>
              </pre>

              <h2 className="text-2xl font-bold mt-5">You need Tailwind</h2>
              <p>
                <a
                  href="https://tailwindcss.com/docs/guides/vite"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind for React and Vite
                </a>
              </p>
              <p>
                When you have Tailwind in your project, you may need to add a
                line of code to the tailwind.config.js file if necessary.
              </p>

              <p className="mt-5">
                <strong>This is the line that you need to add:</strong>
              </p>
              <pre className=" bg-stone-100 rounded-md p-2 overflow-scroll">
                <code>
                  {`"./node_modules/sidebar-react-pro/dist/**/*.{js,ts,jsx,tsx}",`}
                </code>
              </pre>

              <p className="mt-5">
                <strong>This is how your code needs to look:</strong>
              </p>
              <pre className=" bg-stone-100 rounded-md p-2 overflow-scroll">
                <code>
                  {`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/sidebar-react-pro/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
`}
                </code>
              </pre>

              <h2 className="text-2xl font-bold my-5">Sidebar</h2>
              <pre className=" bg-stone-100 rounded-md p-2 overflow-scroll">
                <code>
                  {`import {
  SideBar,
  ButtonBar,
  ButtonDropDownBar,
  DropDownOptions,
} from "sidebar-react-pro";

function App() {
  return (
    <>
      <SideBar
        Name="Moaibi"
        src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1714868174/Portfolio/RESMOAIBI/s1okzium52134zpcetm9.png"
      >
        <ButtonBar icon={<HomeIcon />} TxtColor="text-white">Home</ButtonBar>
        <ButtonDropDownBar icon={<HomeIcon />} TxtColor="text-white" Name={"Products"}>
          <DropDownOptions TxtColor="text-white">Product1</DropDownOptions>
          <DropDownOptions TxtColor="text-white">Product2</DropDownOptions>
          <DropDownOptions TxtColor="text-white">Product3</DropDownOptions>
          <DropDownOptions TxtColor="text-white">Product4</DropDownOptions>
        </ButtonDropDownBar>
        {/* You can also use TxtColor to change the color of the text of the buttons */}
      </SideBar>
    </>
  );
}

export default App;
`}
                </code>
              </pre>

              <h2 className="text-2xl font-bold my-5">Sidebar props</h2>
              <pre className=" bg-stone-100 rounded-md p-2 overflow-scroll">
                <code>
                  {`import { SideBar } from "sidebar-react-pro";

function App() {
  return (
    <>
      <SideBar
        src="https://res.cloudinary.com/dcqvg21nk/image/upload/v1714868174/Portfolio/RESMOAIBI/s1okzium52134zpcetm9.png"
        // URL for your company logo
        Name="Moaibi"
        // Name of your company
        TxtColor="text-white"
        // This is for changing the color of the company Name
        ButtonColor="bg-[#a87abe]"
        // Background color of the sidebar toggle button (open/close button)
        BgColor="bg-[#1c1c1c]"
        // Background color of the sidebar; defaults to #1c1c1c if not specified
        BgImage="https://res.cloudinary.com/dcqvg21nk/image/upload/v1713594373/Portfolio/kh7azy142fknzrmstqed.jpg"
        // URL for a background image to be used in the sidebar
      ></SideBar>
    </>
  );
}

export default App;
`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
