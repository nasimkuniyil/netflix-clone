function InputField({ placeholder, type, handleFocusOut, id, onchange,invalid }) {
  return (
    <div>
      <input
        id={id}
        className={`border ${invalid ? "border-red-500" : "border-gray-300/50 "} rounded-md p-2 placeholder:text-md w-full`}
        type={type || "text"}
        placeholder={placeholder || "text field"}
        onBlur={handleFocusOut}
        onChange={onchange || null}
      />
      {invalid && (<p className="text-red-500 text-sm pt-1 text-start">{invalid}</p>)}
    </div>
  );
}

export default InputField;
