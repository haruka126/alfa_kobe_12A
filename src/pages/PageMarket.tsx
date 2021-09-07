import { Box, Text, Grid, Center, Stack  } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { MarketHeader } from "../components/MarketHeader";
import { ProductCard } from "../components/ProductCard";

export const PageMarket: React.VFC = () => {
    return (
        <>
            <MarketHeader height="6vh" />
            <Text d="" top="0">管理者の方はURLの末尾に/dummyadminを追加してログインしてください。</Text>
            <Center h="100vh" bgColor="#EAEDED">
                <Stack direction="column">
                    <Center>
                        <Box w="80%" p="2vw" bgColor="white" boxShadow="sm">
                            <Grid templateColumns="repeat(3, 1fr)" gap={4} placeItems="center">
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                            </Grid>
                        </Box>
                    </Center>
                    <Center>
                        <Box w="80%" p="2vw" bgColor="white" boxShadow="sm">
                            <Grid templateColumns="repeat(3, 1fr)" gap={4} placeItems="center">
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                            </Grid>
                        </Box>
                    </Center>
                </Stack>
            </Center>
            <Footer height="15vh" backgroundColor="#e7e7e7" />
        </>
    );
};
