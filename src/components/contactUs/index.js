//import { Formik, Field, Form, ErrorMessage } from "formik";
import React from 'react';
import { useFormik } from 'formik';
import Image from '../../components/assets/imageback.jpg'

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },


  });
  return (
      <div style={{  height:'100vh', display:'flex', justifyContent:'center', textAlign:'center', alignItems:'center',
        backgroundImage: "url(" + "https://img5.goodfon.com/original/1280x800/8/5e/gory-peizazh-priroda-zakat-rassvet-nebo-sirenevyi-vodoem.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
      }}
    >
    <form onSubmit={formik.handleSubmit}  >
      <div stylebac={{display:'block', justifyContent:'center', alignItems:'center', backgroundColor:'grey'}}>
      <h1 style={{color:'white', paddingBottom:'1em', paddingLeft:'1.5em', fontWeight:'bold', textShadow:'5px 0 0 black' }}>Form for contact us</h1>
      <div> 
      <label htmlFor="firstName" style={{color:'white', paddingRight:'1em'}}>First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
      </div>
      <div>
      <label htmlFor="lastName" style={{color:'white', paddingRight:'1em'}}>Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
      </div>
      <div style={{paddingLeft:'2.3em'}}>
      <label htmlFor="email" style={{color:'white', paddingRight:'1em'}}>Email </label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>
      <div style={{paddingLeft:'2em'}}>
      <label htmlFor="message" style={{color:'white', paddingRight:'-2em'}}>Message </label>
      <input
        id="message"
        name="message"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.message}
      />
      {formik.errors.message ? <div>{formik.errors.message}</div> : null}
      </div>
      <div>
      <button style={{backgroundColor:'transparent', color:'white'}} type="submit">Submit</button>
      </div>
      </div>
    </form>
    </div>
  );
};
export default SignupForm