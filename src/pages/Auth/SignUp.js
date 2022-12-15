import React, { useState, useEffect } from "react";
import { Redirect, Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import AuthLogo from "../../assets/Img/Landing-Page-artwork-01.png";
import LightLogo from "../../assets/Img/E-Nauli-White-logo.png";
import DarkLogo from "../../assets/Img/E-Nauli-Grey-logo.png";
import { Alert, Message } from "../../components/Alert";
import { Button } from "../../components/Button";
import { FInput } from "../../components/Input/cInput";
import { Formik, Form, Field } from "formik";
import { LoginSchema } from "../../utils/ValidationSchema";
import ReactLoading from "react-loading";

const Loading = () => (
  <ReactLoading type="bars" color="#20ad4f" height={10} width={30} />
);

const Login = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "test@gmail.com",
    password: "123456",
  };

  // const dispatch = useDispatch();

  // const AuthLogin = useSelector((state) => state.AuthLogin);
  // const { loading, error, userInfo } = AuthLogin;

  // useEffect(() => {
  //   if (userInfo?.validLogin) {
  //     navigate("/dashboard");
  //   }
  // }, [navigate, userInfo]);

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    const formData = {
      email: values.email,
      password: values.password,
    };

    // dispatch.AuthLogin.login(formData);
    console.log(formData);

    navigate("/dashboard");
    setSubmitting(false);
    resetForm(initialValues);
  };

  const Navto = () => navigate(`/forgotPassword`);

  return (
    <div className="themeBackground app-border-white flex min-h-screen items-center p-6">
      <div className="mx-auto h-full max-w-4xl flex-1 overflow-hidden ">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          {/* <div className="flex items-center justify-center themeSideBackground bg-gray-50  bg-light-logo bg-contain bg-center bg-repeat-y dark:bg-dark-logo md:h-auto md:w-1/2">
           */}

          <div className="h-fit w-fit flex items-center justify-center md:h-auto md:w-1/2">
            <span className="bg-light-logo dark:bg-dark-logo h-full bg-contain bg-center bg-repeat-y"></span>
            <img
              aria-hidden="true"
              className="shadow-xs object-cover duration-300 ease-in hover:-rotate-2 dark:block md:translate-x-9"
              src={AuthLogo}
              alt="Office"
            />
          </div>
          <main className="themeSideBackground themeText flex items-center justify-center rounded-xl bg-white p-6 shadow-lg sm:p-12 md:w-full">
            <div className="w-full">
              <div className="flex origin-center items-center justify-center align-middle  duration-300 ease-in">
                <img
                  aria-hidden="true"
                  className={`shadow-xs imageDark w-fit h-16 rounded-xl object-fill `}
                  src={DarkLogo}
                  alt="Office"
                />{" "}
                <img
                  aria-hidden="true"
                  className={`shadow-xs imageLight w-fit h-16 rounded-xl object-fill`}
                  src={LightLogo}
                  alt="Office"
                />{" "}
                <h1 className="text-2xl">
                  <span className="font-bold">P</span>arcel{" "}
                  <span className="font-bold"> M</span>anagement
                </h1>
              </div>

              <p className="text-center text-sm">Sign in to your account</p>
              <span className="flex items-center justify-center text-sm">
                {/* {loading && <Loading />}
              {error && <Message>{error}</Message>} */}
              </span>
              <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={LoginSchema}
                validateOnBlur={true}
                onSubmit={onSubmit}
              >
                {({ handleBlur, isSubmitting }) => (
                  <Form id="login-User" className="flex flex-col pt-2 md:pt-8">
                    <FInput
                      type="text"
                      name="email"
                      label="Email"
                      placeholder="Enter email address"
                    />

                    <FInput
                      type="password"
                      name="password"
                      label="Password"
                      placeholder="Password"
                    />

                    {/* <hr className="my-8" /> */}

                    <div className="flex flex-row justify-between">
                      <Button
                        type="submit"
                        form="login-User"
                        color="green"
                        buttonType="filled"
                        size="regular"
                        ripple="light"
                        className="font-semibold"
                        hover={true}
                        // block={true}
                      >
                        Login
                      </Button>

                      <Button
                        type="button"
                        color="teal"
                        buttonType="link"
                        size="sm"
                        ripple="dark"
                        // block={true}
                        onClick={Navto}
                      >
                        Forgot password?
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
  );
};

export default Login;
