import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "@components/sharedcomponents/InputFeild";
import Button from "@components/sharedcomponents/Button";
import { NavLink, useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
  keepLoggedIn: false,
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  keepLoggedIn: Yup.boolean(),
});

const staticCredentials = {
  email: "sodaclick@gmail.com",
  password: "sodaclick123",
};

const onSubmit = async (values, { setSubmitting }) => {
  // Simulate authentication
  if (values.email === staticCredentials.email && values.password === staticCredentials.password) {
    // Save login status and user details in local storage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", JSON.stringify({ email: values.email }));
    
    // Redirect to home page
    window.location.href = "/";
  } else {
    // Handle invalid credentials
    console.log("Invalid credentials");
  }
  setSubmitting(false);
};

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-main-container d-flex justify-content-center align-items-center vh-100">
      <div className="login-wrapper">
        <h1 className="heading-lg">Sign In</h1>
        <p className="heading-sm">
          Enter your email and password to sign in!
        </p>
        
        <div className="my-4 primary text-center google-login w-100">
          <img
            src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png"
            alt="Google Icon"
          />
          Sign in with Google
        </div>

        <div className="d-flex align-items-center my-4">
          <div className="or-bar"></div>
          <span className="mx-3">or</span>
          <div className="or-bar"></div>
        </div>

        <div className="input-wrapper">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form>
                <div>
                  <InputField
                    label="Email"
                    name="email"
                    variant="normal"
                    formik={formik}
                  />
                  <InputField
                    label="Password"
                    type="password"
                    name="password"
                    variant="normal"
                    formik={formik}
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check" style={{ color: '#2B3674' }}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="keepLoggedIn"
                      name="keepLoggedIn"
                      onChange={formik.handleChange}
                      checked={formik.values.keepLoggedIn}
                    />
                    <label className="form-check-label" htmlFor="keepLoggedIn">
                      Keep me logged in
                    </label>
                  </div>
                  <NavLink style={{ color: "#3CA3DC", textDecoration: "none" }}>
                    Forget password?
                  </NavLink>
                </div>
                <Button
                  type="submit"
                  variant="fill"
                  btn="primary"
                  size="lg"
                  bdRadius="16px"
                  width="410px"
                >
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
