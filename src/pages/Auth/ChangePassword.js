import React, { useState, useEffect } from "react";
import { Redirect, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import AuthImage from "../../assets/Img/logo2.png";
import { Alert, Message, Notification } from "../../components/Alert";
import { Button } from "../../components/Button";
import { FInput } from "../../components/Input/cInput";
import { Formik, Form, Field } from "formik";
import { ChangePasswordSchema } from "../../utils/ValidationSchema";
import ReactLoading from "react-loading";

const Loading = () => (
  <ReactLoading type="bars" color="#20ad4f" height={10} width={30} />
);

const Profile = () => {
  const navigate = useNavigate();

  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  // const dispatch = useDispatch();

  // const AuthLogin = useSelector((state) => state.AuthLogin);
  // const { userInfo } = AuthLogin;

  // const AuthchangePassword = useSelector((state) => state.AuthchangePassword);
  // const { loading, error, success } = AuthchangePassword;

  //console.log(changePasswordInfo, error);

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    const formData = {
      email: "test@gmail.com",
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
      confirmPassword: values.confirmPassword,
    };

    navigate(`/login`);
    setSubmitting(false);
    resetForm(initialValues);

    // dispatch.AuthchangePassword.changeUserPassword(formData)
    //   .then((data) => {
    //     //console.log(data);
    //     if (!data.data[0] === "true") {
    //       throw data;
    //     }
    //     Alert("success", `${data.message}`);
    //   })
    //   .catch((err) => {
    //     Alert("error", `${err.message}`);
    //   })
    //   .finally(() => {
    //     navigate(`/login`);
    //     setSubmitting(false);
    //     resetForm(initialValues);
    //   });
  };

  return (
    <>
      <div className="themeBackground mt-14 flex h-full items-center p-6 ">
        <div className="themeSideBackground themeText mx-auto h-full max-w-4xl flex-1  overflow-hidden rounded-lg bg-white shadow-xl ">
          <div className="flex flex-row">
            <main className="flex items-center justify-center p-6 sm:p-12 md:w-full">
              <div className="w-full">
                <h1 className="text-center text-4xl">Change Password</h1>
                {/* <p className="text-center text-sm">{userInfo?.name}</p> */}
                <span className="flex items-center justify-center text-sm">
                  {/* {loading && <Loading />}
                  {error && <Message>{error}</Message>} */}
                </span>
                <Formik
                  enableReinitialize
                  initialValues={initialValues}
                  validationSchema={ChangePasswordSchema}
                  validateOnBlur={true}
                  onSubmit={onSubmit}
                >
                  {({ handleBlur, isSubmitting }) => (
                    <Form
                      id="ChangePassword"
                      className="flex flex-col pt-3 md:pt-8"
                    >
                      <FInput
                        type="password"
                        name="oldPassword"
                        label="Old Password"
                        placeholder="Old Password"
                      />
                      <FInput
                        type="password"
                        name="newPassword"
                        label="New Password"
                        placeholder="New Password"
                      />
                      <FInput
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        placeholder="Confirm Password"
                      />

                      <div className="flex flex-row items-center justify-center pt-6">
                        <Button
                          type="submit"
                          form="ChangePassword"
                          color="green"
                          buttonType="filled"
                          size="regular"
                          ripple="light"
                          className="font-semibold"
                        >
                          Confirm
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
