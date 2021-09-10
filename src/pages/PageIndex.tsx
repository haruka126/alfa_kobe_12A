import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { IndexMain } from "../components/IndexMain";

export const PageIndex: React.VFC = () => {
    return (
        <>
            <Header height="40vh" imageUrl="https://unsplash.it/1000/500" />
            <IndexMain />
            <Footer height="15vh" backgroundColor="#e7e7e7" />
        </>
    );
};
