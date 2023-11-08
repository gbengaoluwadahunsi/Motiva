
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import image from '/public/motiva.png'


const Basic = () => (
  <div  className='h-screen  grid place-items-center bg-center login-background'>
    <div  className = "bg-cyan-700 w-1/4 ">
      <img className=" w-10 h-10 lg:w-24 rounded-full lg:h-24 " src={image} alt=" motiva logo" />
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
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
          <Form className='flex flex-col' >
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
          
        )}
      </Formik>
      <Link className='bg-red-600' to= "/SignUp"> Sign Up</Link>
      
    </div>
  </div>
);

export default Basic;