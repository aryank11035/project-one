import { useNavigate } from "react-router-dom"
import { LoginForm } from "../login-form"
import axios from "axios"
import { Formik } from "formik"
import { useState } from "react"

export default function LoginPage (){



    return (
        <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10 w-full">

            <Login/>
                
        </div>
    )
}




const Login = () => {

    const navigate = useNavigate()


    const loginUser = async (values, setSubmitting , setErrors , setTouched) => {
        try {
            const response = await axios.post(
                "https://dummyjson.com/auth/login",
                {
                    username: values.name,
                    password: values.password,
                }
            );

            console.log(response)

            sessionStorage.setItem("accessToken", response.data.accessToken);
            navigate("/dashboard/category");

        } catch (error) {
            console.log(error.response);

            if(error.response.status === 400){

                setErrors({
                    name: "Invalid username or password",
                    password: "Invalid username or password",
                });

                setTouched({
                    name:true,
                    password: true,
                });
    
                // setTimeout(() => {
                //     setErrors({
                //         name : '',
                //         password : ''
                //     })

                //     setTouched({
                //         name: false,
                //         password: false,
                //     });
                // },1000)
            }


        } finally {
            setSubmitting(false);
        }
    }


    return(
        <Formik
            initialValues={{ name : '', password: '' }}
            validate={values => {
                const errors = {};

                if (
                    !values.name
                ) {
                    errors.name = 'Invalid name ';
                } 
                if (
                    values.password.includes(" ")
                ) {
                    errors.password = 'Must only contains alphabets and numbers'
                }
                return errors;
            }}
            onSubmit={ async (values, { setSubmitting  , setErrors ,setTouched }) => {
                setTimeout(  () => {
                   loginUser(values , setSubmitting , setErrors , setTouched)
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
