import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { TopMain } from "../components/TopMain";

export const PageTop: React.VFC = () => {
    return (
        <>
            <Header height="40vh" imageUrl="https://unsplash.it/1000/500" />
            <TopMain />
            <Footer height="15vh" backgroundColor="#e7e7e7" />
        </>
    );
};
