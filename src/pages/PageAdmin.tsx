import { Stack } from "@chakra-ui/react";
import { ProductCard } from "../components/ProductCard";

export const PageAdmin: React.VFC = () => {
    return (
        <Stack h="100vh" d="flex" justifyContent="center" alignItems="center">
            <ProductCard adminMode />
        </Stack>
    );
};
