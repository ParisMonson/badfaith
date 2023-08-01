export default function SubmitButton({ onClick, children }) {
  return (
    <button
      className="bg-green-700 border-none text-white px-8 py-4 text-center cursor-pointer text-base m-1 font-bold transition duration-400"
      onClick={onClick}
    >
      {children}
    </button>
  );
};


