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
  const updateVehicleRef = useRef();
  const dispatch = useDispatch();

  const [initialValues, setInitialValues] = useState({
    plateNumber: "",
    seatingCapacity: "",
    saccoId: "",
    fleetNumber: "",
  });

  const getSaccos = useSelector((state) => state.getSaccos);
  const { saccos } = getSaccos;

  const updateVehicle = useSelector((state) => state.updateVehicle);
  const { loading, error, success } = updateVehicle;

  // Options
  let saccoOptions =
    saccos &&
    saccos.map((item) => {
      return {
        value: item?.saccoId,
        label: item?.name,
      };
    });

  useEffect(() => {
    if (success || error) {
      dispatch.updateVehicle.RESET();
    }

    const params = {
      page: 0,
      pageSize: 10,
    };

    dispatch.getSaccos.Saccos(params);

    if (success || error) {
      dispatch.updateCustomers.RESET();
    }

    if (updateVehicleRef.current) {
      setInitialValues({
        plateNumber: updateVehicleRef.current.setFieldValue(
          "plateNumber",
          currentData.plateNumber ? currentData.plateNumber : ""
        ),
        seatingCapacity: updateVehicleRef.current.setFieldValue(
          "seatingCapacity",
          currentData.seatingCapacity ? currentData.seatingCapacity : ""
        ),
        fleetNumber: updateVehicleRef.current.setFieldValue(
          "fleetNumber",
          currentData.fleetNumber ? currentData.fleetNumber : ""
        ),

        saccoId: updateVehicleRef.current.setFieldValue(
          "saccoId",
          saccoOptions &&
            saccoOptions.find((item) =>
              item?.value === currentData?.saccoId ? currentData?.saccoId : ""
            )
        ),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, success, error, currentData]);

  const onClose = () => {
    setShowModal(false);
    document.getElementById("update-vehicle").reset();
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = {
      vehicleId: currentData.vehicleId,
      saccoId: values.saccoId.value,
      plateNumber: values.plateNumber,
      seatingCapacity: values.seatingCapacity,
      fleetNumber: values.fleetNumber,
    };

    // console.log(formData);

    await dispatch.updateVehicle.Update(formData);
    setSubmitting(false);
    resetForm(initialValues);
    setShowModal(false);
    tableData();
  };

  return (
    <div>
      <Modal size="regular" active={showModal} toggler={onClose}>
        <ModalHeader toggler={onClose}>Update Vehicle</ModalHeader>

        <Formik
          enableReinitialize
          innerRef={updateVehicleRef}
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
            <Form id="update-vehicle" noValidate>
              <ModalBody>
                <FInput
                  name="plateNumber"
                  type="text"
                  label="plateNumber"
                  placeholder="plateNumber"
                />

                <FInput
                  name="seatingCapacity"
                  type="text"
                  label="seatingCapacity"
                  placeholder="seatingCapacity"
                />

                <FInput
                  name="fleetNumber"
                  type="text"
                  label="fleetNumber"
                  placeholder="fleetNumber"
                />

                <FSelect
                  type="text"
                  label="saccoId"
                  id="saccoId"
                  name="saccoId"
                  options={saccoOptions}
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
                  form="update-vehicle"
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
                  form="update-vehicle"
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
