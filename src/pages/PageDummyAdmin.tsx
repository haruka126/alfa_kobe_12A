import { Box } from "@chakra-ui/react";
import { ProductCard } from "../components/ProductCard";
import { PageSecondLoginAdmin } from "./PageSecondLoginAdmin";

export const PageDummyAdmin: React.VFC = () => {
    return (
        <>
            <Box h="100vh" d="flex" justifyContent="center" alignItems="center">
                <ProductCard adminMode onClickDelete={() =>
                    <PageSecondLoginAdmin />
                } />
            </Box>
            {/* PageLoginAdmin内なのでFooterが2重にならないよう、Footerを呼ばないように */}
        </>
    );
};
