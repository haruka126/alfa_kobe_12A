import { Stack, Text } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { ProductCard } from "../components/ProductCard";

export const PageMarket: React.VFC = () => {
    return (
        <>
            <Stack h="100vh" d="flex" justifyContent="center" alignItems="center">
                <Text d="" top="0">管理者の方はURLの末尾に/adminを追加してログインしてください。</Text>
                <ProductCard />
            </Stack>
            <Footer height="15vh" backgroundColor="#e7e7e7" />
        </>
    );
};
