import { Center, Stack, Box, Grid } from "@chakra-ui/layout";
import { ProductCard } from "./ProductCard";

type Props = {
    adminMode?: boolean;
    onClickDelete?: Function;
};

export const MarketMain: React.VFC<Props> = ({ adminMode = false, onClickDelete }) => {
    return (
        <Center h="100vh" bgColor="#EAEDED">
        <Stack direction="column">
            <Center>
                <Box w="80%" p="2vw" bgColor="white" boxShadow="sm">
                    <Grid templateColumns="repeat(3, 1fr)" gap={4} placeItems="center">
                        { adminMode ?
                        <ProductCard adminMode onClickDelete={() => {
                            if (onClickDelete)
                                onClickDelete()
                        }} /> :
                        <ProductCard />
                        }
                    </Grid>
                </Box>
            </Center>
        </Stack>
        </Center> 
    );
};
