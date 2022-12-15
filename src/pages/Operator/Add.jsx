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
import { FInput, FSelect, FDatePicker } from "../../components/Input/cInput";
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
    name: "",
    phone: "",
    email: "",
    address: "",
    // city: "",
    // county: "",
  };

  const getCounties = useSelector((state) => state.getCounties);
  const { county } = getCounties;

  const addCustomers = useSelector((state) => state.addCustomers);
  const { loading, error, success } = addCustomers;

  // county Options
  let CountyOptions =
    county &&
    county.map((item) => {
      return { value: item._id, label: item.name };
    });

  useEffect(() => {
    if (success || error) {
      dispatch.addCustomers.RESET();
    }

    const params = {
      page: 0,
      pageSize: 50,
    };

    dispatch.getCounties.Counties(params);
  }, [dispatch, success, error, currentData]);

  const onClose = () => {
    setShowModal(false);
    document.getElementById("add-customer").reset();
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = {
      name: values.name,
      phone: values.phone,
      email: values.email,
      address: values.address,
      // city: values.address,
      // county: values.county.value,
    };

    console.log(formData);

    await dispatch.addCustomers.Add(formData);
    setSubmitting(false);
    resetForm(initialValues);
    setShowModal(false);
    tableData();
  };

  return (
    <div>
      <Modal size="regular" active={showModal} toggler={onClose}>
        <ModalHeader toggler={onClose}>Add Customer</ModalHeader>

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
            <Form id="add-customer" noValidate>
              <ModalBody>
                <FInput
                  name="name"
                  type="text"
                  label="Name"
                  placeholder="Name"
                />
                <FInput
                  type="text"
                  name="phone"
                  label="Phone Number"
                  placeholder="Phone Number e.g 254"
                />
                <FInput
                  type="text"
                  name="email"
                  label="Email"
                  placeholder="Enter email address"
                />
                {/* <FSelect
                  type="text"
                  id="county"
                  label="County Location"
                  name="county"
                  options={CountyOptions}
                /> */}

                <FInput
                  type="text"
                  name="address"
                  label="Address"
                  placeholder="Enter address"
                />
              </ModalBody>

              <ModalFooter>
                <div className="mb-6 flex items-center justify-start">
                  {/* {loading && <Loading />} */}
                  {success && Alert("success", `${success}`)}
                  {error && Alert("error", `${error}`)}
                </div>
                <Button
                  //   size="sm"
                  type="reset"
                  form="add-customer"
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
                  form="add-customer"
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
