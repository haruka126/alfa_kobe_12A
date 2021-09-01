import { Box, Center } from "@chakra-ui/react";
import { Copyright } from "./Copyright";

type Props = {
    height: string;
    backgroundColor: string;
    enableCopyright?: boolean;
};

export const Footer: React.VFC<Props> = ({ height, backgroundColor, enableCopyright = false }) => {
    return (
        <Box h={height} backgroundColor={backgroundColor}>
            { enableCopyright && 
            <Center>
                <Copyright bottomJustify fontSize="14px" color="gray">Copyright &copy; 2021 12年A組</Copyright>
            </Center>
            }
        </Box>
    );
};
