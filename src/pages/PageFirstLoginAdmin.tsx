import { Login } from "../components/Login";
import { Footer } from "../components/Footer";
import { PageDummyAdmin } from "./PageDummyAdmin";

export const PageFirstLoginAdmin: React.VFC = () => {
    return (
        <>
            <Login userName={[77, 105, 99, 104, 97, 101, 108]} password={[74, 97, 99, 107, 115, 111, 110]} onLoginComplete={() =>
                <PageDummyAdmin />
            } />
            <Footer height="15vh" backgroundColor="#e7e7e7" />
        </>
    );
};
