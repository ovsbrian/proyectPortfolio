import React from "react";
import PropTypes from "prop-types";
export const ItemContainer = ({ children, text }) => {
  return (
    <>
      <div className="mt-9  select-none">
        <h2 className="text-2xl font-semibold">{text}</h2>
        <div className="mt-2 p-3 ">
          <div className="flex justify-around gap-3">
            {React.Children.map(children, (child) => (
              <>
                <div className="flex flex-col gap-2 items-center   ">
                  {child}
                  <span className="text-xs font-medium text-center">
                    {child.props.name}
                  </span>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
ItemContainer.propTypes = {
  children: PropTypes.element,
  text: PropTypes.string,
};
