import React, { useState, useEffect, forwardRef } from "react";
import { FInput, FSelect, FDatePicker } from "../../components/Input/cInput";
import { Formik, Form } from "formik";

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData,
  edit, // This is a custom function that we supplied to our table instance
}) => {
  // We need to keep and update the state of the cell normally
  const [editing, setediting] = useState(false);
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    updateMyData(index, id, value);
  };
  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
    // setediting(edit);
  }, [edit, initialValue]);

  return (
    <input
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 `}
    />
  );

  // <FInput name={value} type="text" placeholder={value ? value : "text"} />
};
export default EditableCell;
