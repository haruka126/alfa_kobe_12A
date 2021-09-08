import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import Logo from "../assets/images/logo.png";

type Props = {
    height: string;
};

export const MarketHeader: React.VFC<Props> = ({ height }) => {
    return (
        <Flex bgColor="#131921" height={height} justify="space-between">
            <Image px="1rem" py="4px" src={Logo} alt="logo" />
            <Box>
                <Text cursor="pointer" onClick={() => {
                    alert("管理者画面への移動を確認。")
                }}>管理者の方へ</Text>
            </Box>
        </Flex>
    );
};
