import { Box, Center } from "@chakra-ui/react";
import { useState } from "react";
import { ProductCard } from "../components/ProductCard";
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
