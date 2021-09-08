import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";
import teamlogo from "../assets/images/logo.png";

type Props = {
    height: string;
};

export const TeamHeader: React.VFC<Props> = ({ height }) => {
    return (
        <Flex bgColor="#131921" height={height} justify="space-between">
            <Image px="1rem" py="4px" src={teamlogo} alt="logo" />
        </Flex>
    );
};
