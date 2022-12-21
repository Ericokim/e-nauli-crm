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

const AddCharge = ({ showModal, setShowModal, currentData, tableData }) => {
  const addChargeRef = useRef();
  const dispatch = useDispatch();

  const initialValues = {
    charge: "",
    isPercentage: true,
    amount: "",
    frequency: "",
  };

  const addCharge = useSelector((state) => state.addCharge);
  const { loading, error, success, saccoStation } = addCharge;

  useEffect(() => {
    if (success || error) {
      dispatch.addCharge.RESET();
    }
  }, [dispatch, success, error]);

  // charge Options
  let chargeOptions = [
    "PlatformCharge",
    "StatementCharge",
    "ManifestCharge",
    "ParcelCharge",
  ].map((item) => {
    return {
      value: item,
      label: item,
    };
  });

  // frequency Options
  let frequencyOptions = [
    "PerTrip",
    "PerDay",
    "PerWeek",
    "PerMonth",
    "PerAnnum",
    "OneOff",
    "PerSMS",
  ].map((item) => {
    return {
      value: item,
      label: item,
    };
  });

  const onClose = () => {
    setShowModal(false);
    document.getElementById("add-charge").reset();
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = {
      saccoId: currentData.saccoId,
      charge: values.charge.value,
      frequency: values.frequency.value,
      isPercentage: values.isPercentage,
      amount: values.amount,
    };

    console.log(formData);

   await dispatch.addCharge.Add(formData);
    setSubmitting(false);
    resetForm(initialValues);
    setShowModal(false);
    tableData();
  };

  return (
    <div>
      <Modal size="regular" active={showModal} toggler={onClose}>
        <ModalHeader toggler={onClose}>Add Charge</ModalHeader>

        <Formik
          enableReinitialize
          innerRef={addChargeRef}
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
            <Form id="add-charge" noValidate>
              <ModalBody>
                <FSelect
                  type="text"
                  label="Charge"
                  id="charge"
                  name="charge"
                  options={chargeOptions}
                />

                <FSelect
                  type="text"
                  label="Frequency"
                  id="frequency"
                  name="frequency"
                  options={frequencyOptions}
                />

                <FInput
                  name="amount"
                  type="text"
                  label="Amount"
                  placeholder="Amount"
                />

                <FToggle
                  id="isPercentage"
                  name="isPercentage"
                  label="Percentage"
                  text={["True", "False"]}
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
                  form="add-charge"
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
                  form="add-charge"
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

export default AddCharge;
