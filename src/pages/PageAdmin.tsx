import { Stack } from "@chakra-ui/react";
import { ProductCard } from "../components/ProductCard";
import { Footer } from "../components/Footer";

export const PageAdmin: React.VFC = () => {
    return (
        <>
            <Stack h="100vh" d="flex" justifyContent="center" alignItems="center">
                <ProductCard adminMode />
            </Stack>
            <Footer height="15vh" backgroundColor="#e7e7e7" />
        </>
    );
};
