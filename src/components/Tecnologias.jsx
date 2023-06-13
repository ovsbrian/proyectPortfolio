import PropTypes from "prop-types";

export const Tecnologia = ({ icon }) => {
  return (
    <>
      <span className=" hover:text-slate-700   icon">{icon}</span>
    </>
  );
};

Tecnologia.propTypes = {
  icon: PropTypes.element,
};
