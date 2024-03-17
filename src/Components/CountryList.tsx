import { countries } from "countries-list";
import { useContext } from "react";
import ThemeContext from "../Context";

const countrie: { [key: string]: { name: string } } = countries;

const CountryList = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="mb-5">
      <label
        htmlFor="country"
        className={`block mb-2 text-sm font-medium  ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Drzava:
      </label>
      <select
        defaultValue="HR"
        id="country"
        className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
          darkMode
            ? "bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
            : " text-black"
        }`}
      >
        {Object.keys(countries).map((code) => (
          <option key={code} value={code}>
            {countrie[code].name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryList;
