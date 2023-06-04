import PropTypes from "prop-types";

export const Tecnologia = ({ icon }) => {
  return (
    <>
      <div className=" flex ">
        <span className=" hover:text-slate-700">{icon}</span>
      </div>
    </>
  );
};

Tecnologia.propTypes = {
  icon: PropTypes.element,
};
