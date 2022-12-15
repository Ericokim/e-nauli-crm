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
  const updateMachineRef = useRef();
  const dispatch = useDispatch();

  const [initialValues, setInitialValues] = useState({
    serialNumber: "",
    model: "",
    // isAvailable: false,
    status: "",
  });

  const updateMachines = useSelector((state) => state.updateMachines);
  const { loading, error, success } = updateMachines;

  useEffect(() => {
    if (success || error) {
      dispatch.updateMachines.RESET();
    }
  }, [dispatch, success, error]);

  // Status Options
  let StatusOption = ["SCRAPPED", "DAMAGED", "WORKING"].map((item) => {
    return { value: item, label: item };
  });

  useEffect(() => {
    if (success || error) {
      dispatch.updateMachines.RESET();
    }

    if (updateMachineRef.current) {
      setInitialValues({
        serialNumber: updateMachineRef.current.setFieldValue(
          "serialNumber",
          currentData.serialNumber ? currentData.serialNumber : ""
        ),
        model: updateMachineRef.current.setFieldValue(
          "model",
          currentData.model ? currentData.model : ""
        ),

        status: updateMachineRef.current.setFieldValue(
          "status",
          StatusOption &&
            StatusOption.find((item) =>
              item?.value === currentData?.status ? currentData?.status : ""
            )
        ),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, success, error, currentData]);

  const onClose = () => {
    setShowModal(false);
    document.getElementById("update-machine").reset();
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    const params = {
      id: currentData._id,
      serialNumber: values.serialNumber,
      model: values.model,
      // isAvailable: values.isAvailable,
      status: values.status.value,
    };

    console.log(params);

    await dispatch.updateMachines.Update(params);
    setSubmitting(false);
    setShowModal(false);
    tableData();
  };

  return (
    <div>
      <Modal size="regular" active={showModal} toggler={onClose}>
        <ModalHeader toggler={onClose}>Update Machine</ModalHeader>

        <Formik
          enableReinitialize
          innerRef={updateMachineRef}
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
            <Form id="update-machine" noValidate>
              <ModalBody>
                <FInput
                  id="serialNumber"
                  type="text"
                  name="serialNumber"
                  label="Serial Number"
                  placeholder="Serial Number"
                />
                <FInput
                  id="model"
                  type="text"
                  name="model"
                  label="Model"
                  placeholder="Model"
                />

                <FSelect
                  type="text"
                  label="Status"
                  id="status"
                  name="status"
                  options={StatusOption}
                />

                {/* <FToggle
                  id="isAvailable"
                  name="isAvailable"
                  label="Is-Available"
                  text={["True", "False"]}
                /> */}
              </ModalBody>

              <ModalFooter>
                <div className="mb-6 flex items-center justify-start">
                  {success && Alert("success", `${success}`)}
                  {error && Alert("error", `${error}`)}
                </div>
                <Button
                  //   size="sm"
                  type="reset"
                  form="update-machine"
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
                  form="update-machine"
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
