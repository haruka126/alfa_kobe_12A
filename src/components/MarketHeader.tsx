import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import logo from "../assets/images/logo.png";

type Props = {
    height: string;
    adminMode?: boolean;
};

export const MarketHeader: React.VFC<Props> = ({ height, adminMode = false }) => {
    return (
        <Flex bgColor="#131921" height={height} justify="space-between">
            <Image px="1rem" py="4px" src={logo} alt="logo" />
            { adminMode ||
            <Box>
                <Text color="white" cursor="pointer" onClick={() => {
                    alert("URLの末尾に/dummyadminを追加してログインしてください。")
                }}>管理者の方へ</Text>
            </Box>
            }
        </Flex>
    );
};
