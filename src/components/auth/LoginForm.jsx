import React, { useState } from "react";
import { useAuth } from "../../services/AuthProvider";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";

function LoginForm() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Please enter your email"),
            password: Yup.string().required("Please enter your password"),
        }),
        onSubmit: async (values) => {
            try {
                const success = await login({email: values.email, password: values.password});
                if (success) {
                    navigate('/home');
                } else {
                    console.error("Invalid login credentials");
                    formik.setFieldError("general", "Invalid email or password");
                }
            } catch (error) {
                console.error("Error logging in:", error);
            }
        }
    });

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col justify-center items-center gap-4">
            <input
                name="email"
                id="email"
                className={`h-[2rem] w-[14rem] pl-1 rounded-md 
                    ${formik.touched.email && formik.errors.email 
                        ? "text-red-500" 
                        : ""
                    }`}
                type="text"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            <input
                name="password"
                id="password"
                className={`h-[2rem] w-[14rem] pl-1 rounded-md 
                    ${formik.touched.password && formik.errors.password 
                        ? "text-red-500" 
                        : ""
                    }`}
                type="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <button 
                className="bg-green-500/70 w-[4rem] h-[2rem]
                transition rounded-md hover:bg-green-300/50 hover:black" 
                type="submit"
            >
                Login
            </button>
        </form>
    );
}

export default LoginForm;
