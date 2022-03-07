import React from "react";
import CreateA from "./CreateA";
import "./PageSub1.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import {useNavigate} from "react-router-dom"


const validationSchema = yup.object({
  email: yup.string().required("Please enter valid email"),
  password: yup.string().required("Please enter valid password"),
});

function PageSub1() {
  let navigate = useNavigate();
  return (
    <div className="log-in">
      <Formik
        validationSchema={validationSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          
          navigate("/dashboard/home")
        }}
      >
        <Form>
          <div>
            <label htmlFor="email">
              <b>Login to your workspace</b>
              <Field
                type="email"
                id="email"
                name="email"
                className="e-input form-control "
                placeholder="e.g: username@workemail.com"
              />
            </label>
            <br />
            <br />
            <div className="text-danger">
              <ErrorMessage name="email" />
            </div>
          </div>
          <div className="pass">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              id="password"
              className="p-input form-control"
              placeholder="Password"
            />
          </div>
          <br />
          <br />
          <div className="text-danger">
            <ErrorMessage name="password" />
          </div>
          <div>
            <label className="fpass" role="button">
              Forgot Password ?
            </label>
          </div>
          <button
            className="btn-Login btn-sub1 btn btn-secondary "
            type="submit" 
          >
            Login
          </button>
          <div>
            <div className="button-separator">
              <span className="left"></span>
              <span>OR</span>
              <span className="right"></span>
            </div>
          </div>
        </Form>
      </Formik>
      <CreateA />
    </div>
  );
}

export default PageSub1;
