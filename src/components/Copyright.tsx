import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
    fontSize: string;
    color: string;
    bottomJustify?: boolean;
    children: ReactNode;
};

export const Copyright: React.VFC<Props> = ({ fontSize, color, bottomJustify = false, children }) => {
    return <Text 
    fontSize={fontSize}
    color={color}
    pos={bottomJustify ? "absolute" : "static"}
    bottom={0}
    >{children}</Text>;
}