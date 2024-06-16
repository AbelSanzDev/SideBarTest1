import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const Button = ({
  children,
  onClick,
  Rounded = "rounded-full",
  RippleColor = "bg-[#ffffffb5]",
  BgColor = "bg-[#a87abe]",
  TextColor = "text-white",
  Width = "w-[3rem] ",
}) => {
  const [ripples, setRipples] = useState([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (ripples.length > 0) {
        setRipples([]);
      }
    }, 600);
    return () => clearTimeout(timeout);
  }, [ripples]);

  const createRipple = (event) => {
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
    };

    setRipples([...ripples, newRipple]);

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      ref={buttonRef}
      className={`ripple-button ${BgColor} ${TextColor} ${Rounded} ${Width} p-1`}
      onClick={createRipple}
    >
      {children}
      <div className="ripple-container">
        {ripples.map((ripple, index) => (
          <span
            key={index}
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
            }}
            className={`ripple ${RippleColor}`}
          />
        ))}
      </div>
    </button>
  );
};

export default Button;
