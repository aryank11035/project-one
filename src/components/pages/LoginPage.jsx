import { useNavigate } from "react-router-dom"
import { LoginForm } from "../login-form"

import { Formik } from "formik"


export default function LoginPage (){



    return (
        <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">

            <Login/>
                
        </div>
    )
}




const Login = () => {

    const navigate = useNavigate()

    return(
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
                    navigate('/dashboard/category')
                    setSubmitting(false);
                }, 400);
            }}
        >   


            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                
                    
                    <div className="w-full max-w-sm md:max-w-4xl">
                    
                        <LoginForm 
                            values = {values}
                            errors = { errors}
                            touched = {touched}
                            handleChange = { handleChange}
                            handleBlur = { handleBlur}
                            handleSubmit = { handleSubmit}
                            isSubmitting = {isSubmitting}
                        />
        
                    </div> 
                

            )}

            
        </Formik>
    )
}
