import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "../../components/Modal/Modal";
import { Alert, Message, Notification } from "../../components/Alert";
import { Button, BtnLoading } from "../../components/Button";
import {
  FInput,
  CInput,
  FSelect,
  FToggle,
  FDatePicker,
} from "../../components/Input/cInput";
import { Formik, Form } from "formik";
import { format } from "date-fns";
import ReactLoading from "react-loading";
import { AgentSchema } from "../../utils/ValidationSchema";

const Loading = () => (
  <ReactLoading type="bars" color="#20ad4f" height={10} width={30} />
);

const AddStation = ({ showModal, setShowModal, currentData, tableData }) => {
  const addSaccoStationRef = useRef();
  const dispatch = useDispatch();

  const [initialValues, setInitialValues] = useState([
    { name: "", phoneNumber: "" },
  ]);

  const addSaccoStation = useSelector((state) => state.addSaccoStation);
  const { loading, error, success, saccoStation } = addSaccoStation;

  useEffect(() => {
    if (success || error) {
      dispatch.addSaccoStation.RESET();
    }
  }, [dispatch, success, error]);

  const handleFormChange = (index, event) => {
    let values = [...initialValues];
    values[index][event.target.name] = event.target.value;
    setInitialValues(values);
  };

  const handleAddFields = () => {
    const values = [...initialValues];
    values.push({ name: "", phoneNumber: "" });
    setInitialValues(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...initialValues];
    values.splice(index, 1);
    setInitialValues(values);
  };

  const Clear = () => {
    setInitialValues([...Array(initialValues.length).fill("")]);
    setInitialValues([{}]);
    // Array.from(initialValues).forEach((item) => {
    //   Object.keys(item).forEach((key) => {
    //     item[key] = "";
    //   });
    // });
  };

  const onClose = () => {
    setShowModal(false);
    Clear();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      saccoId: currentData.saccoId,
      stations: initialValues,
    };

    console.log(formData);

    await dispatch.addSaccoStation.Add(formData);
    tableData();
    setShowModal(false);
    setInitialValues([{ name: "", phoneNumber: "" }]);
  };

  return (
    <div>
      <Modal size="regular" active={showModal} toggler={onClose}>
        <ModalHeader toggler={onClose}>Add Station to Sacco</ModalHeader>

        <form
          id="add-saccoStation"
          ref={addSaccoStationRef}
          onSubmit={onSubmit}
        >
          <ModalBody>
            {initialValues.map((input, index) => {
              return (
                <div key={index} className="flex items-center justify-between">
                  <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    <CInput
                      type="text"
                      label="Station Name"
                      id="name"
                      name="name"
                      placeholder="Station Name"
                      value={input.name}
                      onChange={(e) => {
                        handleFormChange(index, e);
                      }}
                      // touched={touched.name ? touched.name : null}
                      // Error={touched.name && errors.name ? errors.name : null}
                    />

                    <CInput
                      type="text"
                      label="Station Phone Number"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Station Phone Number"
                      value={input.phoneNumber}
                      onChange={(e) => {
                        handleFormChange(index, e);
                      }}
                      // touched={touched.phoneNumber ? touched.phoneNumber : null}
                      // Error={
                      //   touched.phoneNumber && errors.phoneNumber
                      //     ? errors.phoneNumber
                      //     : null
                      // }
                    />
                  </div>
                  <div className="mt-3 ml-4 flex gap-2">
                    <Button
                      type="button"
                      color="red"
                      size="regular"
                      ripple="light"
                      buttonType="outline"
                      className="w-fit h-10 font-semibold"
                      rounded={false}
                      block={false}
                      hover={true}
                      iconOnly={true}
                      title="Remove Fields"
                      onClick={() => handleRemoveFields(index)}
                    >
                      <i className="bx bx-minus text-xl font-bold" />
                    </Button>

                    <Button
                      type="button"
                      color="green"
                      size="regular"
                      ripple="light"
                      buttonType="outline"
                      className="w-fit h-10 font-semibold"
                      rounded={false}
                      block={false}
                      hover={true}
                      iconOnly={true}
                      title="Add Fields"
                      onClick={() => handleAddFields()}
                    >
                      <i className="bx bx-plus text-xl font-bold" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </ModalBody>

          <ModalFooter>
            <div className="mb-6 flex items-center justify-start">
              {success && Alert("success", `${success}`)}
              {error && Alert("error", `${error}`)}
            </div>
            <Button
              //   size="sm"
              type="reset"
              form="add-saccoStation"
              color="red"
              ripple="dark"
              buttonType="filled"
              onClick={onClose}
              hover={true}
            >
              Close
            </Button>

            <Button
              //   size="sm"
              type="submit"
              form="add-saccoStation"
              color="green"
              ripple="light"
              hover={true}
              // disabled={!dirty || isSubmitting}
            >
              {/* {loading && isSubmitting ? <BtnLoading /> : "Submit"} */}
              Submit
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
};

export default AddStation;
