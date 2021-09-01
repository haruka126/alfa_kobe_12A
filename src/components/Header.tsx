import { Box } from "@chakra-ui/react";

type Props = {
    height: string;
    imageUrl: string;
};

export const Header: React.VFC<Props> = ({ height, imageUrl }) => {
    return <Box h={height} bgImage={imageUrl} bgSize="cover" />
};
