import PropTypes from "prop-types";
export const Container = ({ children, img, titulo, info }) => {
  return (
    <>
      <div className="w-full flex h-32 rounded   shadow-xl ">
        <div className="w-3/12 p-1 ">
          <img className="w-full h-full rounded-md" src={img} />
        </div>
        <div className=" w-9/12 p-2">
          <h2 className="font-bold">{titulo}</h2>
          <div className="h-16">
            <p>{info}</p>
          </div>
          <div className="flex gap-4">{children}</div>
        </div>
      </div>
    </>
  );
};
Container.propTypes = {
  children: PropTypes.string,
  img: PropTypes.string,
  titulo: PropTypes.string,
  info: PropTypes.string,
};
