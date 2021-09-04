import { Box } from "@chakra-ui/react";
import { ProductCard } from "../components/ProductCard";
import { TextAnimation } from "../components/TextAnimation";

export const PageAdmin: React.VFC = () => {
    return (
        <>
            <Box h="100vh" d="flex" justifyContent="center" alignItems="center">
                <ProductCard adminMode onClickDelete={() => 
                    <TextAnimation text="あなたのゲームデータは守られました！" duration={2} />
                } />
            </Box>
            {/* PageLoginAdmin内なのでFooterが2重にならないよう、Footerを呼ばないように */}
        </>
    );
};
