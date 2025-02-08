import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { useApi } from "../../services/axiosConfig";
import { useAuth } from "../../services/AuthProvider";

export default function RegisterForm() {
    const navigate = useNavigate();
    const api = useApi();

    const { login } = useAuth();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Email is required"),
            password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
            confirmPassword: Yup.string().oneOf([Yup.ref("password"), undefined], "Passwords must match").required("Required"),
        }),
        onSubmit: async (values) => {
            try {
                await api.post('/auth/register', values);
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
            } catch (error) {
                console.error("Error registering:", error);
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
            <input
                name="confirmPassword"
                id="confirmPassword"
                className={`h-[2rem] w-[14rem] pl-1 rounded-md 
                    ${formik.touched.confirmPassword && formik.errors.confirmPassword 
                        ? "text-red-500" 
                        : ""
                    }`}
                type="password"
                placeholder="Confirm Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
            />
            <button 
                className="bg-green-500/70 w-[4rem] h-[2rem]
                transition rounded-md hover:bg-green-300/50 hover:black" 
                type="submit"
            >
                Register
            </button>
        </form>
    );
}