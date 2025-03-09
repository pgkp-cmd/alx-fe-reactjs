import {Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
    const validationSchema = Yup.object({
        username: Yup.string().required("Username is required"), email:Yup.string().email("Invalid email format").required("Email is required"), password: Yup.string().min(6, "password must be at least 6 characters").required("password is required"),
    });

    return(
        <Formik initialValues={{ username: "", email: "", password: ""}} validationSchema={validationSchema} onSubmit={(values, {setSubmitting}) => {console.log("Form submitted successfully!", values);setSubmitting(false);
      }}
    >
        {({isSubmitting}) =>(
            <Form>
                <div>
                    <label>Username:</label>
                    <Field type="text" name="username" />
                    <ErrorMessage name="username" components="p" style={{color: "blue"}} />
                </div>

            <div>
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="p" style={{ color: "blue" }} />
            </div>

        <div>
        <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="p" style={{ color: "red" }} />   
        </div>

        <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." :"Register"}
     </button>
     </Form>

     )}
    </Formik>  
    );
};

export default FormikForm;