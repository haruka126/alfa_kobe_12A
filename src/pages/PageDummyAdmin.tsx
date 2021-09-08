import { Box, Center, Stack, Grid } from "@chakra-ui/react";
import { useState } from "react";
import { useHistory } from "react-router";
import { MarketHeader } from "../components/MarketHeader";
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
