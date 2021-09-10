import { useToast } from "@chakra-ui/toast";
import { useHistory } from "react-router";
import { MarketHeader } from "../components/MarketHeader";
import { MarketMain } from "../components/MarketMain";

export const PageDummyAdmin: React.VFC = () => {
    const toast = useToast();
    const history = useHistory();

    return (
        <>
            <MarketHeader height="6vh" adminMode />
            <MarketMain adminMode onClickDelete={() => {
                toast({
                    title: "侵入者検知システムが作動してユーザ名とパスワードが変更させられてしまった！",
                    status: "error",
                    duration: 4000,
                    isClosable: true,
                    position: "top"
                });
                history.push("/market/realadmin");
            }} />
            {/* Footerが2重にならないよう、Footerを呼ばないように */}
        </>
    );
};
