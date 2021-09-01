import { Button, Center, useToast, Stack, Container, Image } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export const TopPageMain: React.VFC = () => {
    const toast = useToast();
    const history = useHistory();
    return (
        <Container w="80%" my={10}>
            <Center>
                <Stack spacing={10}>
                    <Image src="https://unsplash.it/1000/600" alt="" />
                    <Image src="https://unsplash.it/1000/400" alt="" />
                    <Image src="https://unsplash.it/1000/200" alt="" />
                    <Center>
                        <Button
                        m="1rem 0"
                        size="lg"
                        p="2rem"
                        variant="outline"
                        colorScheme="teal"
                        onClick={() => {
                            toast({
                                title: "ゲームデータが盗まれた！",
                                status: "error",
                                duration: 4000,
                                isClosable: true,
                                position: "top"
                            });
                            history.push("/store");
                        }}>事前登録</Button>
                    </Center>
                </Stack>
            </Center>
        </Container>
    );
};
