import { Center } from "@chakra-ui/react";
import { useState } from "react";
import { useHistory } from "react-router";
import { MarketHeader } from "../components/MarketHeader";
import { MarketMain } from "../components/MarketMain";
import { TextAnimation } from "../components/TextAnimation";

export const PageDummyAdmin: React.VFC = () => {
    const [card_deleted, setCardDeleted] = useState(false);
    const history = useHistory();

    return (
        <>
            { card_deleted ?
            <Center h="100vh">
                <TextAnimation text="おや、侵入者かな？<br>ユーザ名とパスワードは変更させてもらったよ。" duration={5} onComplete={() =>
                    setTimeout(() => history.push("/market/realadmin"), 2000)
                } />
            </Center> :
            <>
                <MarketHeader height="6vh" adminMode />
                <MarketMain adminMode onClickDelete={() =>
                    setCardDeleted(true)
                } />
            </>
            }
            {/* Footerが2重にならないよう、Footerを呼ばないように */}
        </>
    );
};
