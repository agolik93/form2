import { useContext } from "react";
import ThemeContext from "../Context";
import { RegisterOptions, FieldValues } from "react-hook-form"; // Import RegisterOptions and FieldValues

interface InputProps {
  errors: any; // Update type as per your actual error object type
  register: (name: keyof FieldValues, options?: RegisterOptions) => void; // Specify type for register function
  placeholder: string;
  id: string;
  headline: string;
}

const Input: React.FC<InputProps> = ({
  errors,
  register,
  placeholder,
  id,
  headline,
}) => {
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
          {...register(id)} // Use id directly as the name for register
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
