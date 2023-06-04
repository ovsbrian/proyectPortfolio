import PropTypes from "prop-types";
export const Container = ({ children, titulo, info, img = false, url }) => {
  return (
    <>
      <div className="w-full flex items-center h-36 rounded p-3    ">
        {img ? (
          <div className="w-2/12 h-full  select-none">
            <img
              className="object-scale-down h-full w-full rounded-md"
              src={img}
              alt="Project Image"
            />
          </div>
        ) : null}
        <div className="w-10/12 p-2 flex flex-col  select-none">
          <h2 className="font-bold">
            <a
              href={url}
              target="_blank"
              className="hover:text-slate-700 hover:cursor-pointer"
            >
              {titulo}
            </a>
          </h2>
          <div className="h-16">
            <p>{info}</p>
          </div>
          <div className="flex gap-4 ">{children}</div>
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
