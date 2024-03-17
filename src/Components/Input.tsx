import { useContext } from "react";
import ThemeContext from "../Context";

const Input = ({ errors, register, placeholder, id, headline }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div className="mb-5">
        <label
          htmlFor={id}
          className={`block mb-2 text-sm font-medium ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {headline}
        </label>

        <input
          {...register(`${id}`)}
          type="text"
          placeholder={placeholder}
          id={id}
          className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
            darkMode
              ? "bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
              : " text-black"
          }`}
        />
        {errors[id] && <div className="text-red-500">{errors[id].message}</div>}
      </div>
    </>
  );
};

export default Input;
