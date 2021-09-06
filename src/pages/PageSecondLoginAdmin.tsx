import { Login } from "../components/Login";
import { Footer } from "../components/Footer";
import { PageAdmin } from "./PageAdmin";
import { useState } from "react";
import { TextAnimation } from "../components/TextAnimation";

export const PageSecondLoginAdmin: React.VFC = () => {
    const [finishedTextAnimation, setFinishedTextAnimation] = useState(false);

    setTimeout(() => {
        setFinishedTextAnimation(true);
    }, 7000);
    return (
        <>
            { finishedTextAnimation ?
            <>
                <Login userName={[74, 97, 99, 107, 115, 111, 110]} password={[77, 105, 99, 104, 97, 101, 108]} onLoginComplete={() =>
                    <PageAdmin />
                } />
                <Footer height="15vh" backgroundColor="#e7e7e7" />
            </>
            : <TextAnimation text="おや、侵入者かな？<br>ユーザ名とパスワードは変更させてもらったよ。" duration={5} />
            }
        </>
    );
};
