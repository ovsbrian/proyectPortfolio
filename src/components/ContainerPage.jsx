import { useState } from "react";
import { SwitchButton } from "./SwitchBtn";

const white =
  "https://cdn.dribbble.com/userupload/3343246/file/original-3045a6683073dee1451521f411912682.jpg?";
const black =
  "https://cdn.dribbble.com/userupload/4489762/file/original-d0a795590160a47658447f47c8576cdd.jpg?compress=1&resize=1024x768";

export const ContainerPage = ({ children }) => {
  const [background, setBackground] = useState(white);
  const [textColor, setTextColor] = useState("");

  const handleToggle = (isDarkMode) => {
    setBackground(isDarkMode ? black : white);
    setTextColor(isDarkMode ? "text-white" : "");
  };

  return (
    <>
      <img className="w-full max-h-screen" src={background} />
      <div className="absolute inset-0 w-full backdrop-blur-3xl flex justify-center overflow-y-auto">
        <div className={` w-2/4 p-3 ${textColor ? "text-gray-300" : ""}`}>
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
