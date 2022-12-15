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

const Update = ({ showModal, setShowModal, currentData, tableData }) => {
  const updateSaccoRef = useRef();
  const dispatch = useDispatch();

  const [initialValues, setInitialValues] = useState({
    pin: "",
    name: "",
    senderId: "",
    address: "",
    contactPerson: "",
    contactNumber: "",
    postalAddress: "",
    tagline: "",
    code: "",
    region: "",
    primaryTerminus: "",
    secondaryTerminus: "",
    maximumFare: "",
    platformFee: "",
  });

  const updateSacco = useSelector((state) => state.updateSacco);
  const { loading, error, success } = updateSacco;

  useEffect(() => {
    if (success || error) {
      dispatch.updateSacco.RESET();
    }

    if (success || error) {
      dispatch.updateCustomers.RESET();
    }

    if (updateSaccoRef.current) {
      setInitialValues({
        pin: updateSaccoRef.current.setFieldValue(
          "pin",
          currentData.pin ? currentData.pin : ""
        ),
        name: updateSaccoRef.current.setFieldValue(
          "name",
          currentData.name ? currentData.name : ""
        ),
        address: updateSaccoRef.current.setFieldValue(
          "address",
          currentData.address ? currentData.address : ""
        ),
        contactPerson: updateSaccoRef.current.setFieldValue(
          "contactPerson",
          currentData.contactPerson ? currentData.contactPerson : ""
        ),
        contactNumber: updateSaccoRef.current.setFieldValue(
          "contactNumber",
          currentData.contactNumber ? currentData.contactNumber : ""
        ),
        senderId: updateSaccoRef.current.setFieldValue(
          "senderId",
          currentData.senderId ? currentData.senderId : ""
        ),
        postalAddress: updateSaccoRef.current.setFieldValue(
          "postalAddress",
          currentData.postalAddress ? currentData.postalAddress : ""
        ),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, success, error, currentData]);

  const onClose = () => {
    setShowModal(false);
    // document.getElementById("update-sacco").reset();
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = {
      saccoId: currentData.saccoId,
      pin: values.pin,
      name: values.name,
      senderId: values.senderId,
      address: values.address,
      contactPerson: values.contactPerson,
      contactNumber: values.contactNumber,
      postalAddress: values.postalAddress,
      tagline: values.tagline,
    };

    // console.log(formData);

    await dispatch.updateSacco.Update(formData);
    setSubmitting(false);
    resetForm(initialValues);
    setShowModal(false);
    tableData();
  };

  return (
    <div>
      <Modal size="regular" active={showModal} toggler={onClose}>
        <ModalHeader toggler={onClose}>Update Sacco</ModalHeader>

        <Formik
          enableReinitialize
          innerRef={updateSaccoRef}
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
            <Form id="update-sacco" noValidate>
              <ModalBody>
                <FInput
                  name="name"
                  type="text"
                  label="name"
                  placeholder="name"
                />

                <FInput name="pin" type="text" label="pin" placeholder="pin" />

                <FInput
                  name="address"
                  type="text"
                  label="address"
                  placeholder="address"
                />

                <FInput
                  name="senderId"
                  type="text"
                  label="senderId"
                  placeholder="senderId"
                />

                <FInput
                  name="contactPerson"
                  type="text"
                  label="contactPerson"
                  placeholder="contactPerson"
                />

                <FInput
                  name="contactNumber"
                  type="text"
                  label="contactNumber"
                  placeholder="contactNumber"
                />
                <FInput
                  name="postalAddress"
                  type="text"
                  label="postalAddress"
                  placeholder="postalAddress"
                />
                <FInput
                  name="tagline"
                  type="text"
                  label="tagline"
                  placeholder="tagline"
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
                  form="update-sacco"
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
                  form="update-sacco"
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

export default Update;
