import { Center, Text } from "@chakra-ui/react";

type Props = {
    height: string;
    backgroundColor: string;
};

export const Footer: React.VFC<Props> = ({ height, backgroundColor }) => {
    return (
        <Center h={height} backgroundColor={backgroundColor}>
            <Center flexDirection="column" pos="absolute" bottom={0}>
                <Text size="14px" color="gray">「リアル脱出ゲーム」は株式会社のSCRAPの登録商標です</Text>
                <Text size="14px" color="gray">Copyright &copy; 2021 12年A組</Text>
            </Center>
        </Center>
    );
};
