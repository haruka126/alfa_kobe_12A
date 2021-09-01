import { Box, Input, Stack, Button, Flex, FormLabel, FormControl, useToast, InputGroup, InputRightElement, Icon } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { ChangeEvent, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LostPassword } from "./LostPassword";
import { PageAdmin } from "../pages/PageAdmin";

type Props = {
    // 数値配列で受け取り、それを文字列に変換する。
    userName: number[];
    password: number[];
};

export const Login: React.VFC<Props> = ({ userName, password }) => {
    const [input_user_id, setUserId] = useState("");
    const [input_password, setInputPassword] = useState("");
    const [login_complete, setLoginComplete] = useState(false);
    const [show_pas, setShowPas] = useState(false);
    const [is_loading, setIsLoading] = useState(false);

    const toast = useToast();

    const location = useLocation();
    const query = new URLSearchParams(location.search);

    // 数値配列を文字列に変換
    const convertToValid = (userName: number[], password: number[]) => {
        const valid_user_name = String.fromCharCode(...userName);
        const valid_password = String.fromCharCode(...password);
        return { valid_user_name, valid_password };
    };

    const 
    { valid_user_name: correct_user_name
    , valid_password: correct_password
    } = convertToValid(userName, password);

    const onChangeUserId = (event: ChangeEvent<HTMLInputElement>) => 
        setUserId(event.target.value);

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => 
        setInputPassword(event.target.value);

    const onClickSubmit = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            if (input_user_id === correct_user_name && input_password === correct_password) {
                toast({
                    title: "ログイン成功。",
                    status: "success",
                    isClosable: true,
                    duration: 3000,
                    position: "top"
                });
                setLoginComplete(true);
            }
            else {
                toast({
                    title: "ログイン失敗。",
                    description: "ユーザー名またはパスワードが正しくありません。",
                    status: "error",
                    isClosable: true,
                    duration: 3000,
                    position: "top"
                });
            }
        }, 500);
    };

    if (query.get("action") === "lostpassword")
        return <LostPassword />;
    else if (login_complete)
        return <PageAdmin />
    else {
        return (
            <Flex align="center" justify="center" height="100vh">
                <Box w="sm" p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
                    <Stack spacing={6} px={8}>
                        <FormControl isRequired>
                            <FormLabel type="text" fontSize="sm">ユーザ名</FormLabel>
                            <Input type="" variant="outline" value={input_user_id} onChange={onChangeUserId} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel fontSize="sm">パスワード</FormLabel>
                            <InputGroup>
                                <Input type={show_pas ? "text" : "password"} variant="outline" value={input_password} onChange={onChangePassword}/>
                                <InputRightElement width="3rem">
                                    <Button h="1.5rem" size="sm" onClick={() => setShowPas(!show_pas)}>
                                        {show_pas ? <Icon as={ViewOffIcon} /> : <Icon as={ViewIcon} />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Button colorScheme="teal" type="submit" onClick={onClickSubmit} isLoading={is_loading}>ログイン</Button>
                        <Link to={`${location.pathname}?action=lostpassword`}>パスワードをお忘れですか？</Link>
                    </Stack>
                </Box>
            </Flex>
        );
    }

};
