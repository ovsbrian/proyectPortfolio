import PropTypes from "prop-types";

export const Tecnologia = ({ icon }) => {
  return (
    <>
      <div className=" flex">
        <div className="  rounded-2xl">{icon}</div>
      </div>
    </>
  );
};

Tecnologia.propTypes = {
  icon: PropTypes.element,
};
