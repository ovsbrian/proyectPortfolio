export const Border = ({ children }) => {
  return (
    <>
      <img
        className={`absolute inset-0 w-full max-h-screen`}
        src="https://cdn.dribbble.com/userupload/3343246/file/original-3045a6683073dee1451521f411912682.jpg?"
      />

      <div className="absolute inset-0 w-full backdrop-blur-3xl flex justify-center overflow-y-auto">
        <div className="w-2/4 p-3">{children}</div>
      </div>
    </>
  );
};
