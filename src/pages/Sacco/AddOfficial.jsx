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

const AddOfficial = ({ showModal, setShowModal, currentData, tableData }) => {
  const addOfficialRef = useRef();
  const dispatch = useDispatch();

  const initialValues = {
    msisdn: "",
    designation: "",
    saccoStationId: "",
  };

  const addOfficial = useSelector((state) => state.addOfficial);
  const { loading, error, success, saccoStation } = addOfficial;

  useEffect(() => {
    if (success || error) {
      dispatch.addOfficial.RESET();
    }
  }, [dispatch, success, error]);

  // Options
  let designationOptions = [
    "Official",
    "Agent",
    "Clerk",
    "Fuel",
    "StationManager",
    "ParcelAgent",
  ].map((item) => {
    return {
      value: item,
      label: item,
    };
  });

  const onClose = () => {
    setShowModal(false);
    document.getElementById("add-official").reset();
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = {
      saccoId: currentData.saccoId,
      msisdn: values.msisdn,
      designation: values.designation.value,
      saccoStationId: values.saccoStationId,
    };

    console.log(formData);

    await dispatch.addOfficial.Add(formData);
    setSubmitting(false);
    resetForm(initialValues);
    setShowModal(false);
    tableData();
  };

  return (
    <div>
      <Modal size="regular" active={showModal} toggler={onClose}>
        <ModalHeader toggler={onClose}>Add Official</ModalHeader>

        <Formik
          enableReinitialize
          innerRef={addOfficialRef}
          initialValues={initialValues}
          // validationSchema={AgentSchema}
          validateOnBlur={true}
          onSubmit={onSubmit}
          onReset={onClose}
        >
          {({
            values,
            errors,
            dirty,
            touched,
            isSubmitting,
            setFieldValue,
            setFieldTouched,
          }) => (
            <Form id="add-official" noValidate>
              <ModalBody>
                <FInput
                  name="msisdn"
                  type="text"
                  label="Phone Number"
                  placeholder="Phone Number"
                />

                <FSelect
                  type="text"
                  label="Designation"
                  id="designation"
                  name="designation"
                  options={designationOptions}
                />
              </ModalBody>

              <ModalFooter>
                <div className="mb-6 flex items-center justify-start">
                  {success && Alert("success", `${success}`)}
                  {error && Alert("error", `${error}`)}
                </div>
                <Button
                  //   size="sm"
                  type="reset"
                  form="add-official"
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
                  form="add-official"
                  color="green"
                  ripple="light"
                  hover={true}
                  disabled={!dirty || isSubmitting}
                >
                  {loading && isSubmitting ? <BtnLoading /> : "Submit"}
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};

export default AddOfficial;
