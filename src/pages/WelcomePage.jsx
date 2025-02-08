import { useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/Register";

function WelcomePage() {
    const [showLogin, setShowLogin] = useState(true);

    function toggleForm() {
        setShowLogin(!showLogin);
    }

    return (
        <div className="h-full flex flex-col justify-center items-center">
            <h1 className="text-center text-[48px] font-bold pb-[10rem]">Welcome to Pokemon TCG Tracker</h1>
            <div className="max-w-[25rem] bg-white/[85%] rounded-2xl w-[60%]
                min-w-[20rem] h-[25rem] flex flex-col items-center 
                justify-center border-4 border-gray-500/30"
            >
                {showLogin &&
                    <>
                        <h3 className="font-bold text-[24px] mb-8">Login</h3>
                        <LoginForm />
                        <p className="hover:text-blue-400 transition
                            hover:cursor-pointer select-none underline
                            text-blue-600 mt-5" 
                            onClick={toggleForm}
                        >
                            Sign up
                        </p>
                    </>
                }
                {!showLogin && 
                    <>
                        <h3 className="font-bold text-[24px] mb-8">Register</h3>
                        <RegisterForm />
                        <p className="hover:text-blue-400 transition
                            hover:cursor-pointer select-none underline
                            text-blue-600 mt-5" 
                            onClick={toggleForm}
                        >
                            Login
                        </p>
                    </>
                }
            </div>
        </div>
    );
}

export default WelcomePage;