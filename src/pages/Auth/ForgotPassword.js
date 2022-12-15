/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthImage from "../../assets/Img/Security On-amico.png";
import ImageLight from "../../assets/Img/forgot-password-office.jpeg";
import ImageDark from "../../assets/Img/forgot-password-office-dark.jpeg";
import {
  Alert,
  Message,
  Notification,
  useConfirmationDialog,
} from "../../components/Alert";
import { FInput } from "../../components/Input/cInput";
import { Button } from "../../components/Button";
import { Formik, Form } from "formik";
import ReactLoading from "react-loading";
import { forgotPasswordSchema } from "../../utils/ValidationSchema";

const Loading = () => (
  <ReactLoading type="bars" color="#20ad4f" height={10} width={30} />
);

const ForgotPassword = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "test@gmail.com",
  };

  // const dispatch = useDispatch();

  const { getConfirmation } = useConfirmationDialog();

  // const AuthResetPassword = useSelector((state) => state.AuthResetPassword);
  // const { loading, error, success, resetPasswordInfo } = AuthResetPassword;

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    const formData = {
      email: values.email,
    };

    console.log(formData);
    navigate(`/login`);

    // dispatch.AuthResetPassword.resetUserPassword(formData)
    //   .then(async (data) => {
    //     if (!data.message.includes("successfully")) {
    //       throw data;
    //     }

    //     const confirmed = await getConfirmation({
    //       message: `${data.message} 👍`,
    //       showDismiss: false,
    //       showConfirm: true,
    //     });
    //     if (confirmed) {
    //       navigate(`/login`);
    //     }
    //   })
    //   .catch((err) => {});

    resetForm(initialValues);
    setSubmitting(false);
  };

  return (
    <div className="themeBackground flex min-h-screen items-center bg-gray-100 p-6 ">
      <div className="themeSideBackground themeText mx-auto h-full max-w-4xl flex-1 overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md hover:shadow-gray-400 ">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="shadow-xs block h-full w-full object-cover dark:block"
              src={ImageLight}
              alt="Office"
            />

            {/* <img
              aria-hidden="true"
              className="shadow-xs hidden h-full w-full object-cover dark:block"
              src={ImageDark}
              alt="Office"
            /> */}
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-full">
            <div className="w-full">
              <h1 className="mb-4 text-center text-2xl">Forgot password</h1>

              <span className="flex items-center justify-center text-sm">
                {/* {loading && <Loading />}
                {error && <Message>{error}</Message>} */}
              </span>

              <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={forgotPasswordSchema}
                validateOnBlur={true}
                onSubmit={onSubmit}
              >
                {({ handleBlur, isSubmitting }) => (
                  <Form
                    id="forgotPassword"
                    className="flex flex-col pt-3 md:pt-8"
                  >
                    <FInput
                      type="email"
                      name="email"
                      label="Email"
                      placeholder="email@.address.com"
                    />

                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        color="green"
                        buttonType="filled"
                        size="md"
                        ripple="dark"
                        form="forgotPassword"
                        block={false}
                        hover={true}
                      >
                        Recover password
                      </Button>

                      {/* <NavLink to="/login">
                        <Button
                          type="button"
                          color="blueGray"
                          buttonType="link"
                          size="regular"
                          ripple="dark"
                          iconOnly={false}
                        >
                          <i className="bx bx-arrow-back " /> Back
                        </Button>
                      </NavLink> */}
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
