import React from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import { useField } from "formik";
import Select from "react-select";
import { Toggle } from "../Button";
import { getMonth, getYear, addDays } from "date-fns";
import range from "lodash/range";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { FaCalendarAlt } from "react-icons/fa";
import { useStateContext } from "../../context/ContextProvider";

export const Checkbox = ({
  rest,
  name,
  label,
  value,
  onChange,
  checked,
  labelText,
  placeholder,
  className,
}) => {
  return (
    <div className="flex items-center">
      <input
        {...rest}
        type="checkbox"
        id={label}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        className={`${className} w-full  rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 `}
      />

      <label
        htmlFor={label || name}
        className="text-md ml-2 flex cursor-pointer select-none items-center transition-all duration-300"
      >
        {labelText || placeholder}
      </label>
    </div>
  );
};

export const CLabel = ({ rest, children, className }) => {
  return (
    <label
      {...rest}
      className={`${className} mb-2 block text-sm font-semibold text-gray-600 dark:text-gray-400`}
    >
      {children}
    </label>
  );
};

export const CInput = ({
  rest,
  input,
  type,
  name,
  label,
  value,
  pattern,
  minLength,
  maxLength,
  onChange,
  labelText,
  placeholder,
  className,
  LableClassName,
  Error,
  ref,
}) => {
  return (
    <div className="max-w-9xl mb-4">
      <label
        htmlFor={label || name}
        className={`${LableClassName} mb-2 block text-sm font-semibold text-gray-500`}
      >
        {labelText || placeholder}
      </label>
      <input
        {...rest}
        {...input}
        id={label}
        type={type}
        name={name}
        value={value}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        onChange={onChange}
        placeholder={placeholder}
        className={`${className} w-full  rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 `}
      />
      <span className="text-xs text-red-400">{Error}</span>
    </div>
  );
};

export const CSelect = ({
  id,
  rest,
  name,
  value,
  label,
  Error,
  options,
  onChange,
  className,
  placeholder,
  isClearable,
  isSearchable,
  getOptionLabel,
  getOptionValue,
  maxMenuHeight,
  isDisabled,
}) => {
  const { mode, currentColor } = useStateContext();

  const colourStyles = {
    menuList: (styles) => ({
      ...styles,
      background: mode,
      color: "#000",
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      background: isFocused
        ? currentColor
        : isSelected
        ? currentColor
        : undefined,
      color: isFocused ? "#fff" : isSelected ? "#fff" : undefined,
      zIndex: 1,
    }),
    menu: (base) => ({
      ...base,
      zIndex: 100,
    }),
  };

  const theme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "#f3f3f3",
      primary: currentColor,
    },
  });

  return (
    <div className="max-w-9xl themeText themeSideBackground mb-4">
      <CLabel htmlFor={id || name}>{label}</CLabel>
      <Select
        {...rest}
        id={id}
        instanceId={id}
        name={name}
        theme={theme}
        styles={colourStyles}
        className={`${className} themeText themeSideBackground w-full rounded-md px-0 py-0 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 `}
        placeholder={placeholder}
        value={value}
        options={options}
        onChange={onChange}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
        isClearable={isClearable}
        maxMenuHeight={maxMenuHeight}
        isSearchable={isSearchable}
        isDisabled={isDisabled}
      />
      <span className="text-xs text-red-400">{Error}</span>
    </div>
  );
};

export const CDatePicker = ({ label, ...props }) => {
  const {
    name,
    id,
    className,
    placeholder,
    dateFormat,
    selectsRange,
    onChange,
    value,
    startDate,
    endDate,
    onBlur,
    Error,
  } = props;

  return (
    <div className="max-w-9xl mb-4">
      <label
        htmlFor={props.id || props.name}
        className={`text-md themeText mb-2 block font-semibold`}
      >
        {label}
      </label>

      <DatePicker
        id={id}
        {...props}
        name={name}
        onBlur={onBlur}
        isClearable={true}
        selectsRange={selectsRange}
        dateFormat={dateFormat}
        startDate={startDate}
        endDate={endDate}
        selected={Date.parse(value)}
        onChange={onChange}
        maxDate={addDays(new Date(), 0)}
        placeholderText={placeholder}
        showMonthDropdown={true}
        showYearDropdown={true}
        forceShowMonthNavigation={true}
        dropdownMode="select"
        className={`${className} text-md w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 `}
      />
      <span className="text-xs text-red-400">{Error}</span>
    </div>
  );
};

export const CToggle = ({
  id,
  name,
  text,
  label,
  Error,
  checked,
  onChange,
}) => {
  return (
    <div className="max-w-9xl">
      <CLabel htmlFor={id} className="mb-3">
        {label}
      </CLabel>
      <Toggle
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
        text={text}
      />
      <span className="text-xs text-red-400">{Error}</span>
    </div>
  );
};

export const FInput = ({
  className,
  onFocus,
  onBlur,
  LableClassName,
  label,
  ref,
  ...props
}) => {
  const { mode, currentColor } = useStateContext();
  const [field, meta] = useField(props);
  const { touched, error } = meta;
  const {} = field;

  return (
    <div className="max-w-9xl mb-4">
      <label
        htmlFor={props.id || props.name}
        className={`${LableClassName} themeText mb-2 block text-sm font-semibold text-gray-500`}
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
        ref={ref}
        onBlur={onBlur}
        onFocus={onFocus}
        className={`${className} w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:border-[${currentColor}] focus:outline-none focus:ring-1 focus:ring-[${currentColor}] `}
      />

      {touched && error ? (
        <span className="py-6 text-sm text-red-400">{error}</span>
      ) : null}
    </div>
  );
};

export const FDatePicker = ({ label, ...props }) => {
  const {
    name,
    id,
    placeholder,
    dateFormat,
    selectsRange,
    maxDate,
    className,
  } = props;
  const [field, meta, helper] = useField(name);
  const { value, onBlur } = field;
  const { touched, error } = meta;

  const years = range(1900, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="max-w-9xl mb-4">
      <label
        htmlFor={props.id || props.name}
        className={`mb-2 block text-sm font-semibold text-gray-500`}
      >
        {label}
      </label>

      <DatePicker
        id={id}
        {...props}
        name={name}
        onBlur={onBlur}
        isClearable={true}
        dateFormat="dd-MMMM-yyyy"
        // dateFormat={dateFormat}
        // selectsRange={true}
        selected={Date.parse(value)}
        onChange={(e) => helper.setValue(e === null ? "" : e)}
        maxDate={maxDate && addDays(new Date(), 0)}
        placeholderText={placeholder}
        showMonthDropdown={true}
        showYearDropdown={true}
        forceShowMonthNavigation={true}
        dropdownMode="select"
        className={`${className} w-full rounded-md border border-gray-300 px-3 py-2 text-base placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 `}
      />

      {touched && error ? (
        <span className="text-xs text-red-400">{error}</span>
      ) : null}
    </div>
  );
};

export const FSelect = ({ label, ...props }) => {
  const { mode, currentColor } = useStateContext();
  const { name, options, ref } = props;
  const [field, meta, helper] = useField(name);
  const { value, onBlur } = field;
  const { touched, error } = meta;

  const colourStyles = {
    menuList: (styles) => ({
      ...styles,
      background: mode,
      color: "#000",
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      background: isFocused
        ? currentColor
        : isSelected
        ? currentColor
        : undefined,
      color: isFocused ? "#fff" : isSelected ? "#fff" : undefined,
      zIndex: 1,
    }),
    menu: (base) => ({
      ...base,
      zIndex: 100,
    }),
  };

  const theme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "#f3f3f3",
      primary: currentColor,
    },
  });

  return (
    <div className="max-w-9xl mb-4">
      <CLabel htmlFor={props.id || props.name}>{label}</CLabel>
      <Select
        ref={ref}
        {...props}
        theme={theme}
        styles={colourStyles}
        name={name && name}
        options={options && options}
        instanceId={props.id}
        onBlur={onBlur}
        value={value && value}
        onChange={(e) => helper.setValue(e === null ? "" : e)}
        isSearchable
        isClearable
      />
      {touched && error ? (
        <span className="text-xs text-red-400">{error}</span>
      ) : null}
    </div>
  );
};

export const FToggle = ({ label, ...props }) => {
  const { name, id, text } = props;
  const [field, meta, helper] = useField(name);
  const { value } = field;
  const { touched, error } = meta;

  return (
    <div className="max-w-9xl">
      <CLabel htmlFor={props.id || props.name} className="mb-3">
        {label}
      </CLabel>
      <Toggle
        name={name}
        id={id}
        checked={value}
        onChange={helper.setValue}
        text={text}
      />
      {touched && error ? (
        <span className="text-xs text-red-400">{error}</span>
      ) : null}
    </div>
  );
};

export const CDateRange = ({
  name,
  id,
  label,
  className,
  calendarClassName,
  maxDate,
  Error,
  onChange,
  value,
  isOpen,
}) => {
  return (
    <div className="max-w-9xl mb-4 ">
      <CLabel htmlFor={id || name}>{label}</CLabel>
      <DateRangePicker
        id={id}
        name={name}
        format={"d/MM/y"}
        value={value}
        onChange={onChange}
        className={`${className}`}
        calendarClassName={`${calendarClassName}`}
        dayAriaLabel="Day"
        monthAriaLabel="Month"
        yearPlaceholder="YYYY"
        dayPlaceholder="DD"
        monthPlaceholder="MM"
        yearAriaLabel="Year"
        // autoFocus={true}
        // closeCalendar={false}
        calendarIcon={<FaCalendarAlt />}
        nativeInputAriaLabel="Date"
        calendarAriaLabel="Toggle calendar"
        clearAriaLabel="Clear value"
        maxDate={maxDate && addDays(new Date(), 0)}
      />

      <span className="text-xs text-red-400">{Error}</span>
    </div>
  );
};

export const SInput = ({
  rest,
  input,
  type,
  name,
  label,
  value,
  pattern,
  minLength,
  maxLength,
  onChange,
  onClick,
  labelText,
  placeholder,
  className,
  LableClassName,
  Error,
  ref,
}) => {
  const { mode, currentColor } = useStateContext();

  return (
    <div className="mx-auto flex h-10 max-w-md items-center rounded-md shadow-md ">
      <div className="w-full">
        <input
          {...rest}
          {...input}
          id={label}
          type={type}
          name={name}
          value={value}
          pattern={pattern}
          minLength={minLength}
          maxLength={maxLength}
          onChange={onChange}
          placeholder={placeholder}
          className={`h-10 w-full rounded-l-md px-4 py-2 text-gray-800 ring-1 ring-gray-200 focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300 `}
        />
      </div>

      <div>
        <button
          style={{
            backgroundColor: currentColor,
          }}
          type="button"
          form="SearchUser"
          onClick={onClick}
          className={`flex h-10 w-10 items-center justify-center rounded-r-md bg-[${currentColor}] text-gray-200 duration-200  ease-in hover:scale-105 hover:cursor-pointer `}
        >
          <i className="bx bx-search fill-current text-xl transition-all duration-200  ease-in hover:scale-110 hover:cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

CInput.propTypes = {
  className: PropTypes.string,
};
