const SecondaryBtn = ({ className, children }) => {
  return (
    <>
      <button
        className={`text-red-600 border-current border px-6 py-3 rounded hover:text-white  hover:bg-red-600 duration-300 ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default SecondaryBtn;
