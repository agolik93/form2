import { useContext } from "react";
import ThemeContext from "../Context";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const ToggleButton = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleDarkMode}>
        {darkMode ? (
          <MdDarkMode className="size-10" />
        ) : (
          <CiLight className="size-10" />
        )}
      </button>
    </div>
  );
};

export default ToggleButton;
