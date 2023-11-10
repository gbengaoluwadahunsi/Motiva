import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import image from '/public/motiva.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen grid place-items-center bg-center login-background">
      <div className="bg-white text-center mx-auto grid grid-rows-7  h-full gap-2 p-6 rounded-lg w-1/4">
      <img className="w-10 h-10 lg:w-20 rounded-full border-4 border-cyan-950 mx-auto lg:h-20" src={image} alt="motiva logo" />
        <h1 className="text-cyan-900 font-extrabold lg:text-xl">
          Create an Account
        </h1>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            agreeToTerms: false,
          }}
          validate={(values) => {
            const errors = {};
            if (!values.firstName) {
              errors.firstName = 'Required';
            }
            if (!values.lastName) {
              errors.lastName = 'Required';
            }
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.password) {
              errors.password = 'Required';
            } else if (!/(?=.*[A-Z])(?=.*[0-9])/.test(values.password)) {
              errors.password =
                'Password must contain at least one capital letter and one number';
            }
            if (values.password !== values.confirmPassword) {
              errors.confirmPassword = 'Passwords do not match';
            }
            if (!values.agreeToTerms) {
              errors.agreeToTerms = 'You must agree to the terms of service';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="row-span-6 bg-white grid grid-row-5 ">
              <Field
                className="px-4 h-14 rounded border-2 border-cyan-950 bg-gray-100 row-span-2"
                type="text"
                name="firstName"
                placeholder="First Name"
              />
              <ErrorMessage
                className="text-red-700 font-semibold"
                name="firstName"
                component="div"
              />
              <Field
                className="px-4 h-14 rounded border-2 border-cyan-950 bg-gray-100 row-span-2"
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
              <ErrorMessage
                className="text-red-700 font-semibold"
                name="lastName"
                component="div"
              />
              <Field
                className="px-4 h-14 rounded border-2 border-cyan-950 bg-gray-100 row-span-2"
                type="email"
                name="email"
                placeholder="Email Address"
              />
              <ErrorMessage
                className="text-red-700 font-semibold"
                name="email"
                component="div"
              />
              <div className="w-full bg-gray-100 rounded relative h-14">
                <Field
                  className="px-4 h-full w-full bg-gray-100 rounded border-2 border-cyan-950 row-span-2 pr-10"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                />
                <div className="absolute top-6 right-3">
                  {showPassword ? (
                    <FaEyeSlash
                      className="cursor-pointer text-cyan-950"
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <FaEye
                      className="cursor-pointer text-cyan-950"
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </div>
              </div>
              <ErrorMessage
                className="text-red-700 font-semibold"
                name="password"
                component="div"
              />
              <Field
                className="px-4 h-14 rounded border-2 border-cyan-950 bg-gray-100 row-span-2"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
              <ErrorMessage
                className="text-red-700 font-semibold"
                name="confirmPassword"
                component="div"
              />
              <label className="flex flex-row gap-2 items-center mb-4  ">
                <Field
                  type="checkbox"
                  name="agreeToTerms"
                  className=""
                />
                <span className='col-span-3'> I agree to <span className='  text-cyan-950  font-extrabold'>MOTIVA</span>&apos;s Terms of Service</span>
              </label>
              <button
                className="bg-cyan-950 rounded font-extrabold h-14 text-cyan-100 row-span-1"
                type="submit"
                disabled={isSubmitting}
              >
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
        <Link className="font-bold" to="/login">
          Already have an account? <span className="font-extrabold">Sign In</span>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
