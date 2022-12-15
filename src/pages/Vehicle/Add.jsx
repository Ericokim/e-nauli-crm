import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "../../components/Modal/Modal";
import { ExportCSV } from "../../components/Table/ExportCSV";
import { Alert, Message, Notification } from "../../components/Alert";
import { Button, BtnLoading } from "../../components/Button";
import {
  CInput,
  FInput,
  FSelect,
  FToggle,
  FDatePicker,
} from "../../components/Input/cInput";
import Tab from "../../components/Tab/Tab";
import { Formik, Form } from "formik";
import { format } from "date-fns";
import ReactLoading from "react-loading";
import { AgentSchema } from "../../utils/ValidationSchema";
import Papa from "papaparse";
import _, { map } from "underscore";

const Loading = () => (
  <ReactLoading type="bars" color="#20ad4f" height={10} width={30} />
);

const Add = ({ showModal, setShowModal, currentData, tableData }) => {
  const addRef = useRef();
  const uploadRef = useRef();
  const dispatch = useDispatch();

  const [parsedData, setParsedData] = useState([]);

  const initialValues = {
    serialNumber: "",
    model: "",
    // isAvailable: false,
    status: "",
    file: "",
  };

  const addMachines = useSelector((state) => state.addMachines);
  const { loading, error, success } = addMachines;

  useEffect(() => {
    if (success || error) {
      dispatch.addMachines.RESET();
    }
  }, [dispatch, success, error]);

  // Status Options
  let StatusOption = ["SCRAPPED", "DAMAGED", "WORKING"].map((item) => {
    return { value: item, label: item };
  });

  const onClose = () => {
    setShowModal(false);
    document.getElementById("add-machine").reset();
    document.getElementById("upload-machine").reset();
    var s = document.getElementById("file");
    s.value = null;
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = {
      serialNumber: values.serialNumber,
      model: values.model,
      // isAvailable: values.isAvailable,
      status: values.status.value,
    };

    console.log(formData);

    await dispatch.addMachines.Add(formData);
    setSubmitting(false);
    resetForm(initialValues);
    setShowModal(false);
    tableData();
  };

  const onUploadSubmit = async (values, { setSubmitting, resetForm }) => {
    var itemData = _.chunk(parsedData, 100);
    for (let i = 0; i < itemData.length; i++) {
      await itemData[i].map((item) => {
        const formData = {
          serialNumber: item.serialNumber,
          model: item.model,
          status: item.status,
        };

        console.log(formData);
        return dispatch.addMachines.Add(formData);
      });

      if (i + 1 === itemData.length) {
        console.log("Last loop:", i + 1);
        setSubmitting(false);
        resetForm(initialValues);
        setShowModal(false);
        setParsedData([]);
        tableData();
      }
    }
  };

  return (
    <div>
      <Modal size="regular" active={showModal} toggler={onClose}>
        <ModalHeader toggler={onClose}>Add/Upload Machine</ModalHeader>
        <Tab
          size="xs"
          rounded={false}
          block={false}
          iconOnly={false}
          hover={false}
          color="blue"
          ripple="dark"
          buttonType="link"
          tabName={["Add Machine", "Upload Machine"]}
          tabIcon={["fas fa-calendar-week", "fas fa-bars-progress"]}
          tabcontent={[
            <div>
              {/* <ModalHeader toggler={onClose}>Add Machine</ModalHeader> */}

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
                  <Form id="add-machine" noValidate>
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
                        form="add-machine"
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
                        form="add-machine"
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
            </div>,

            <div>
              {/* <ModalHeader toggler={onClose}>Upload Machine</ModalHeader> */}

              <Formik
                enableReinitialize
                innerRef={uploadRef}
                initialValues={initialValues}
                // validationSchema={AgentSchema}
                validateOnBlur={true}
                onSubmit={onUploadSubmit}
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
                  <Form id="upload-machine" noValidate>
                    <ModalBody>
                      <div className="flex flex-col gap-y-3">
                        {/* <p> Click here to download the CSV file, then select it to upload</p> */}

                        <div className="flex flex-row items-center justify-between">
                          <div className="flex w-full">
                            <div className="">
                              <label className="themeText mb-2 inline-block text-gray-700">
                                Download file
                              </label>
                              <ExportCSV
                                size="sm"
                                color="purple"
                                text="Download CSV"
                              />
                            </div>
                          </div>

                          <div className="flex w-full">
                            <CInput
                              id="file"
                              type="file"
                              name="file"
                              accept=".csv"
                              label="Upload file"
                              placeholder="Upload file"
                              onBlur={() => setFieldTouched("file", true)}
                              // touched={touched.file ? touched.file : null}
                              Error={
                                touched.file && errors.file ? errors.file : null
                              }
                              onChange={(event) => {
                                setFieldValue("file", event.target.files[0]);
                                // console.log(event.target.files[0]);

                                Papa.parse(event.target.files[0], {
                                  header: true,
                                  skipEmptyLines: true,
                                  complete: function (results) {
                                    const rowsArray = [];
                                    const valuesArray = [];

                                    // Iterating data to get column name and their values
                                    results.data.map((d) => {
                                      rowsArray.push(Object.keys(d));
                                      valuesArray.push(Object.values(d));
                                    });

                                    // Parsed Data Response in array format
                                    setParsedData(results.data);
                                  },
                                });
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </ModalBody>

                    <ModalFooter>
                      <div className="mb-6 flex items-center justify-start">
                        {success && Alert("success", `${success}`)}
                        {error && Alert("error", `${error}`)}
                      </div>
                      <Button
                        //   size="sm"
                        type="reset"
                        form="upload-machine"
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
                        form="upload-machine"
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
            </div>,
          ]}
        />
      </Modal>
    </div>
  );
};

export default Add;
