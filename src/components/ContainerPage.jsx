import { useState } from "react";
import { SwitchButton } from "./SwitchBtn";

const white = "backgroundLight";
const black = "backgroundDark";

export const ContainerPage = ({ children }) => {
  const [background, setBackground] = useState(white);
  const [textColor, setTextColor] = useState("");

  const handleToggle = (isDarkMode) => {
    setBackground(isDarkMode ? black : white);
    setTextColor(isDarkMode ? "text-white" : "");
  };

  return (
    <>
      <div
        className={`h-full w-full backdrop-blur-3xl flex justify-center  ${background}  `}
      >
        <div
          className={` w-full p-3 ${
            textColor ? "text-gray-300" : ""
          }  md:w-2/4 text-lg`}
        >
          <div className="flex justify-end m-2">
            <SwitchButton onToggle={handleToggle} />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};
ContainerPage.propTypes = {
  children: Element.string,
};
