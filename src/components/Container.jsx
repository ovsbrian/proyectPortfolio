import PropTypes from "prop-types";
export const Container = ({ children, titulo, info, img, url }) => {
  return (
    <>
      <div className="w-full items-center rounded p-4 flex flex-col   ">
        <h2 className="font-bold m-2">
          <a
            href={url}
            rel="noreferrer"
            target="_blank"
            className="hover:text-slate-700 hover:cursor-pointer"
          >
            {titulo}
          </a>
        </h2>
        <div className="h-auto mb-4">
          <p className="p-2 text-justify">{children}</p>
        </div>
        <div className="p-2 flex select-none mb-2">
          <a
            href="https://ovsbrian.github.io/ageCalculatorApp/"
            rel="noreferrer"
            target="_blank"
          >
            {
              <img
                className=" w-full rounded-md hover:opacity-80"
                src={img}
                alt="Project Image"
              />
            }
          </a>
        </div>
        <div className="flex gap-5 m-4">{info}</div>
      </div>
    </>
  );
};
Container.propTypes = {
  children: PropTypes.string,
  img: PropTypes.string,
  titulo: PropTypes.string,
  info: PropTypes.string,
  url: PropTypes.string,
};
