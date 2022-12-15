import React from "react";
import PropTypes from "prop-types";

const Toggle = ({ id, text, name, checked, onChange, className, disabled }) => {
  function handleKeyPress(e) {
    if (e.keyCode !== 32) return;
    e.preventDefault();
    onChange(!checked);
    console.log(checked);
  }

  return (
    <div className={`${className} relative flex w-full items-center`}>
      {id ? (
        <>
          <input
            id={id}
            name={name}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            data-yes={text[0]}
            data-no={text[1]}
            onChange={(e) => onChange(e.target.checked)}
            onKeyDown={(e) => {
              handleKeyPress(e);
            }}
            className={`bg-opacity-3 flex h-6 w-20 cursor-pointer appearance-none gap-1 rounded-lg border-2 border-red-200  bg-red-200 tracking-tighter text-red-800 transition-all duration-300 before:ml-6 before:space-x-4 before:text-sm before:content-[attr(data-no)] after:absolute  after:left-1  after:top-1 after:block after:h-4 after:w-4  after:scale-110 after:transform  after:rounded-full after:bg-red-500 after:text-red-500 after:duration-200 after:content-[''] checked:border-green-200 checked:bg-green-200 checked:before:mx-2.5 checked:before:text-green-800 checked:before:content-[attr(data-yes)] checked:after:translate-x-14 checked:after:scale-110 checked:after:transform checked:after:bg-green-500 after:hover:bg-red-600 checked:after:hover:bg-green-600`}
          />
        </>
      ) : null}
    </div>
  );
};

Toggle.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  text: PropTypes.array,
};

export default Toggle;
