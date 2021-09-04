import { Login } from "../components/Login";
import { Footer } from "../components/Footer";

export const PageLogin: React.VFC = () => {
    return (
        <>
            <Login userName={[77, 105, 99, 104, 97, 101, 108]} password={[74, 97, 99, 107, 115, 111, 110]} />
            <Footer height="15vh" backgroundColor="#e7e7e7" />
        </>
    );
};
