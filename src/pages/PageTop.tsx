import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { TopPageMain } from "../components/TopPageMain";

export const PageTop: React.VFC = () => {
    return (
        <>
            <Header height="40vh" imageUrl="https://unsplash.it/1000/500" />
            <TopPageMain />
            <Footer height="15vh" backgroundColor="#e7e7e7" enableCopyright />
        </>
    );
};
