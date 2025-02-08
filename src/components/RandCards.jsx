import { useEffect, useState } from "react";
import { useApi } from "../services/axiosConfig";


function RandCards() {
    const api = useApi();
    const [cards, setCards] = useState([])

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await api.get('/cards');
                setCards(response.data.cards);
            } catch (error) {
                console.error("Error fetching cards data:", error);
            }
        };

        fetchCards();
    }, [api])

    return (
        <div className="max-w-[80rem] w-[80%] min-h-[20rem] h-[29rem] flex flex-col
        justify-start items-center bg-white/90
        rounded-xl border-gray-600/30 border-2 py-4">
            <h1 className="font-bold text-3xl pb-4">Featured Cards</h1>
            <div className="w-full overflow-x-auto flex justify-start items-center
            rounded-xl px-6 flex-shrink-0 hide-scrollbar gap-3">
                {cards.map((card) => (
                    <div className="min-w-[15rem]" key={card.card_id}>
                        <img className="rounded-xl" src={card.img_small} alt={card.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RandCards;