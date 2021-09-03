import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter } from "react-router-dom";
import { PageRoute } from "./route/PageRoute";

export const App: React.VFC = () => {
    return (
        <HashRouter basename="/alfa_kobe_12A">
            <ChakraProvider>
                <PageRoute />
            </ChakraProvider>
        </HashRouter>
    );
};

