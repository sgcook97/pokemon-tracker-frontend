import { createContext, useContext, useEffect, useState } from "react";
import { useApi } from "./axiosConfig";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const api = useApi();
    const [user, setUser] = useState(null);

    async function login(credentials) {
        try {
            const res = await api.post('/auth/login',  {
                email: credentials.email,
                password: credentials.password
            })

            // console.log(res.data.user);
            
            if (res.status === 200) {
                setUser(res.data.user);
                return true;
            }
        } catch (error) {
            console.error("Login failed:", error.response?.data || error.message);
            return false;
        }
    }

    async function logout() {
        try {
            await api.post('/auth/logout');
            setUser(null);
        } catch (error) {
            console.error("Logout failed:", error.message);
        }
    }

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await api.get("/auth/user");
                setUser(res.data.user);
            } catch (err) {
                console.error("User session expired or not logged in.");
                setUser(null);
            }
        };
        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}