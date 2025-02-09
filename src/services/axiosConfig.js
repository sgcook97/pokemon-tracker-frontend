import { useMemo } from "react";
import axios from "axios";


export function useApi() {

    const api = useMemo(() => {
        const instance = axios.create({
            baseURL: import.meta.env.VITE_API_URL,
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            }
        });

        instance.interceptors.request.use(
            (config) => {
                return config;
            },
            (error) => Promise.reject(error)
        );

        instance.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response?.status === 401) {
                    console.error("Unauthorized, redirecting to login...");
                }
                return Promise.reject(error);
            }
        );

        return instance;
    }, []);

    return api;
}
