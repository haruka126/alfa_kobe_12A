import { Footer } from "../components/Footer";
import { Login } from "../components/Login";
import { PageRealAdmin } from "./PageRealAdmin";

export const PageRealLogin: React.VFC = () => {
    return (
        <>
            <Login userName={[74, 97, 99, 107, 115, 111, 110]} password={[77, 105, 99, 104, 97, 101, 108]} onLoginComplete={() =>
                <PageRealAdmin />
            } />
            <Footer height="15vh" backgroundColor="#e7e7e7" />
        </>
    );
};
