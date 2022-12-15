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

const Add = ({ showModal, setShowModal, currentData, tableData }) => {
  const addRef = useRef();
  const dispatch = useDispatch();

  const initialValues = {
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
  };

  const getSaccos = useSelector((state) => state.getSaccos);
  const { saccos } = getSaccos;

  const addSacco = useSelector((state) => state.addSacco);
  const { loading, error, success } = addSacco;

  useEffect(() => {
    if (success || error) {
      dispatch.addSacco.RESET();
    }

    const params = {
      page: 0,
      pageSize: 10,
    };

    dispatch.getSaccos.Saccos(params);
  }, [dispatch, success, error]);

  // Options
  let saccoOptions =
    saccos &&
    saccos.map((item) => {
      return {
        value: item?.saccoId,
        label: item?.name,
      };
    });

  const onClose = () => {
    setShowModal(false);
    document.getElementById("add-sacco").reset();
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = {
      pin: values.pin,
      name: values.name,
      senderId: values.senderId,
      address: values.address,
      contactPerson: values.contactPerson,
      contactNumber: values.contactNumber,
      postalAddress: values.postalAddress,
      tagline: values.tagline,
      code: values.code,
      region: values.region,
      primaryTerminus: values.primaryTerminus,
      secondaryTerminus: values.secondaryTerminus,
      maximumFare: values.maximumFare,
      platformFee: values.platformFee,
    };

    // console.log(formData);

    await dispatch.addSacco.Add(formData);
    setSubmitting(false);
    resetForm(initialValues);
    setShowModal(false);
    tableData();
  };

  return (
    <div>
      <Modal size="regular" active={showModal} toggler={onClose}>
        <ModalHeader toggler={onClose}>Add Sacco</ModalHeader>

        <Formik
          enableReinitialize
          innerRef={addRef}
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
            <Form id="add-sacco" noValidate>
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
                  name="region"
                  type="text"
                  label="region"
                  placeholder="region"
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
                  name="primaryTerminus"
                  type="text"
                  label="primaryTerminus"
                  placeholder="primaryTerminus"
                />
                <FInput
                  name="secondaryTerminus"
                  type="text"
                  label="secondaryTerminus"
                  placeholder="secondaryTerminus"
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
                  form="add-sacco"
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
                  form="add-sacco"
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

export default Add;
