const PrimaryBtn = ({ className, children }) => {
  return (
    <>
      <button
        className={`bg-red-600  px-6 py-3 rounded border border-red-600 hover:border-white text-white hover:bg-red-700 duration-300 ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default PrimaryBtn;
