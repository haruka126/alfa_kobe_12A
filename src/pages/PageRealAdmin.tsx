import { Box, Center, Stack, Grid } from "@chakra-ui/react";
import { useState } from "react";
import { MarketHeader } from "../components/MarketHeader";
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
            <>
                <MarketHeader height="6vh" />
                <Center h="100vh" bgColor="#EAEDED">
                    <Stack direction="column">
                        <Center>
                            <Box w="80%" p="2vw" bgColor="white" boxShadow="sm">
                                <Grid templateColumns="repeat(3, 1fr)" gap={4} placeItems="center">
                                    <ProductCard adminMode onClickDelete={() => 
                                        setCardDeleted(true)
                                    } />
                                </Grid>
                            </Box>
                        </Center>
                    </Stack>
                </Center>
            </>
            }
            {/* Footerが2重にならないよう、Footerを呼ばないように */}
        </>
    );
};
