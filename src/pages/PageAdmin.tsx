import { Box } from "@chakra-ui/react";
import { ProductCard } from "../components/ProductCard";
import { PageCleared } from "./PageCleared";

export const PageAdmin: React.VFC = () => {
    return (
        <>
            <Box h="100vh" d="flex" justifyContent="center" alignItems="center">
                <ProductCard adminMode onClickDelete={() => 
                    <PageCleared />
                } />
            </Box>
            {/* PageLoginAdmin内なのでFooterが2重にならないよう、Footerを呼ばないように */}
        </>
    );
};
