export const ItemContainer = ({ children, text }) => {
  return (
    <>
      <div className="mt-9">
        <h2 className="text-2xl font-semibold">{text}</h2>
        <div className="mt-2 p-3 flex  justify-around">{children}</div>
      </div>
    </>
  );
};
