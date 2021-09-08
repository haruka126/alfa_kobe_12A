import { Center } from "@chakra-ui/react";
import { useState } from "react";
import { MarketHeader } from "../components/MarketHeader";
import { MarketMain } from "../components/MarketMain";
import { PageCleared } from "./PageCleared";


export const PageRealAdmin: React.VFC = () => {
    const [card_deleted, setCardDeleted] = useState(false);

    return (
        <>
            { card_deleted ?
            <Center h="100vh">
                <PageCleared />
            </Center>
            :
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
