import { useEffect, useState } from "react";
import { useApi } from "../services/axiosConfig";
import {useNavigate} from "react-router";

function FeaturedSets() {
    const navigate = useNavigate();
    const api = useApi();
    const [sets, setSets] = useState([]);

    useEffect(() => {
        const fetchSets = async () => {
            try {
                const response = await api.get("/sets");
                setSets(response.data.sets);
            } catch (error) {
                if (error.response && error.response.status == 401) {
                    console.error("Token expired. Redirecting to Login...");
                    navigate("/");
                } else {
                    console.error("Error fetching sets data:", error);
                }
            }
        }

        fetchSets();
    }, [api]);


    return (
        <div className="max-w-[80rem] w-[80%] min-h-[15rem] h-[15rem] flex flex-col
        justify-start items-center bg-white/90
        rounded-xl border-gray-600/30 border-2 py-4">
            <h1 className="font-bold text-3xl pb-4">Featured Sets</h1>
            <div className="w-full overflow-x-auto flex justify-start items-center
            rounded-xl px-6 flex-shrink-0 hide-scrollbar gap-3">
                {sets.map((set) => (
                    <div className="min-w-[10rem]" key={set.set_id}>
                        <img src={set.logo_image_url} alt={set.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeaturedSets;