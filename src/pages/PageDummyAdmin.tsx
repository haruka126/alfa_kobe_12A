import { Box, Center } from "@chakra-ui/react";
import { useState } from "react";
import { useHistory } from "react-router";
import { ProductCard } from "../components/ProductCard";
import { TextAnimation } from "../components/TextAnimation";

export const PageDummyAdmin: React.VFC = () => {
    const [card_deleted, setCardDeleted] = useState(false);
    const history = useHistory();

    return (
        <>
            { card_deleted ?
            <Center h="100vh">
                <TextAnimation text="おや、侵入者かな？<br>ユーザ名とパスワードは変更させてもらったよ。" duration={5} onComplete={() =>
                    setTimeout(() => history.push("/store/realadmin"), 2000)
                } />
            </Center> :
            <Box h="100vh" d="flex" justifyContent="center" alignItems="center">
                <ProductCard adminMode onClickDelete={() =>
                    setCardDeleted(true)
                } />
            </Box>
            }
            {/* PageLoginAdmin内なのでFooterが2重にならないよう、Footerを呼ばないように */}
        </>
    );
};
