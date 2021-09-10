import { Box, Center, Link, Stack } from "@chakra-ui/layout";
import { useHistory } from "react-router";
import { Footer } from "../components/Footer";
import { TextAnimation } from "../components/TextAnimation";

export const PageStory: React.VFC = () => {
    const history = useHistory();

    return (
        <>
            <Center h="100vh">
                <Stack>
                    <Box fontFamily="'Kiwi Maru', serif" fontSize="18px" color="blue.900">
                        <TextAnimation>
                            事前登録をしようと思ったらゲームデータが盗まれてしまったようだ。<br />
                            調べてみると、ゲームデータは闇マーケットで販売されてしまっている。<br />
                            どうにか、この闇マーケットからゲームデータを取り返せないだろうか？
                        </TextAnimation>
                    </Box>
                    <Link color="teal.500" onClick={() => history.push("/market")} isExternal mt="2rem" textAlign="right">
                        ゲームスタート ＞
                    </Link>
                </Stack>
            </Center>
            <Footer height="15vh" backgroundColor="#e7e7e7" />
        </>
    );
};
