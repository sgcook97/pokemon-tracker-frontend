import Header from "../components/Header";
import QuickStats from "../components/QuickStats";
import RandCards from "../components/RandCards";
import FeaturedSets from "../components/FeaturedSets";

function HomePage() {
    return (
        <div className="h-full flex flex-col justify-start
        items-center pb-10" >
            <Header />
            <div className="mt-20 w-full flex flex-col items-center justify-center mb-4">
                <QuickStats />
            </div>
            <div className="mt-20 w-full flex flex-col items-center justify-center mb-4">
                <RandCards />
            </div>
            <div className="mt-20 w-full flex flex-col items-center justify-center mb-4">
                <FeaturedSets />
            </div>
        </div>
    );
}

export default HomePage;