import React from "react";
import'./CreateA.css';

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';

const validationSchema = yup.object({
  name:yup.string().required("Name Required"),
  email:yup.string().required("Email required"),
  phone:yup.string().required("Please enter valid number"),
  name_of_organization:yup.string().required("Name of Organization Required"),
  password:yup.string().required("Password Required"),

});

function CreateA() {
  return (
    <div>
      <Formik
      validationSchema={validationSchema}
      initialValues={{name:"", email:"", phone:"",name_of_organization:"",password:""}} onSubmit={(values)=>{
        console.log(values);
      }}
      >
        <Form>
      <div>
        <button
          type="button"
          className="creat btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Create employer account
        </button>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Tell us about yourself
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="p-dialog-content">
                <div>
                  <div className="p-field">
                    <label className="mt-2 d-block">Your Name</label>
                    <Field className="name input text p-component w-100 d-block rounded-3" name="name"/>
                  </div>
                  <br/>
        <div className='text-danger'>
        <ErrorMessage name="name" />
        </div>
                  <div className="p-field">
                    <label className="mt-2 d-block">Work Email</label>
                    <Field className="p-Field text p-component w-100 d-block rounded-3" name="email"/>
                  </div>
                  <br/>
        <div className='text-danger'>
        <ErrorMessage name="email" />
        </div>
                  <div className="phone" name="phone">
                    <label className="d-block mt-2 mob">Mobile Number</label>
                    <div className="react-tel-input ">
                      <div className="p1">
                      <PhoneInput
                                inputProps={{
                                  name: "phone",
                                  required: true,
                                  autoFocus: true,
                                } } name="phone"
                              />
                      </div>
                      
                    </div>
                  </div>
                  <div className="p-field org">
                    <label className="  mt-2 d-block">Name of Organization</label>
                    <Field className="p-input text p-component w-100 d-block rounded-3" name="name_of_organization"/>
                  </div>
                  <br/><br/>
        <div className='text-danger'>
        <ErrorMessage name="name_of_organization" />
        </div>
                  <div className="p-field org">
                    <label className="mt-2 d-block">Password</label>
                    <Field
                      type="password"
                      name="password"
                      className="p-input text p-component w-100 d-block rounded-3"
                    />
                  </div>
                  <br/> <br/> 
        <div className='text-danger'>
        <ErrorMessage name="password" />
        </div>
                </div>
              </div>

              <div className="modal-footer">
                <button className="btn btn-primary fut" type="submit" >
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Form>
      </Formik>
    </div>
  );
}

export default CreateA;
