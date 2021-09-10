import { useState } from "react";
import { MarketHeader } from "../components/MarketHeader";
import { MarketMain } from "../components/MarketMain";
import { GameClear } from "../components/GameClear";


export const PageRealAdmin: React.VFC = () => {
    const [card_deleted, setCardDeleted] = useState(false);

    return (
        <>
            { card_deleted ?
                <GameClear />
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
