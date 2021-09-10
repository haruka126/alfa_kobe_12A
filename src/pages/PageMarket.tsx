import { Footer } from "../components/Footer";
import { MarketHeader } from "../components/MarketHeader";
import { MarketMain } from "../components/MarketMain";

export const PageMarket: React.VFC = () => {
    return (
        <>
            <MarketHeader height="6vh" />
            <MarketMain />
            <Footer height="15vh" backgroundColor="#e7e7e7" />
        </>
    );
};
