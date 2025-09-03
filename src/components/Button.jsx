const Button = ({ text, handleClick, btnStyle }) => {
  return (
    <button
      className={`lg:hover:scale-95 duration-150 py-2 px-5 rounded-md hover:cursor-pointer ${
        btnStyle || "border-2 border-gray-300"
      }`}
      onClick={handleClick || null}
    >
      {text || "Button"}
    </button>
  );
};

export default Button;
