import { CloseIcon, StarIcon } from "@chakra-ui/icons"
import { Badge, Box, IconButton, Image } from "@chakra-ui/react"

type Props = {
    adminMode?: boolean;
    margin?: string;
    onClickDelete?: React.MouseEventHandler<HTMLButtonElement>;
};

export const ProductCard: React.VFC<Props> = ({ adminMode = false, margin = "", onClickDelete }) => {
    const property = {
        imageUrl: "https://unsplash.it/382/255",
        imageAlt: "",
        title: "あなたのゲームデータ",
        formattedPrice: "¥30,000",
        likeCount: 26,
        rating: 4,
    };

    return (
        <Box m={margin} maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={property.imageUrl} alt={property.imageAlt} />
    
            <Box p="6">
                <Box d="flex" justifyContent="space-between" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                    New
                    </Badge>
                    { adminMode &&
                    <IconButton onClick={ onClickDelete } aria-label="Delete this product" icon={<CloseIcon />} />
                    }
                </Box>
        
                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {property.title}
                </Box>
        
                <Box>
                    {property.formattedPrice}
                </Box>
        
                <Box d="flex" mt="2" alignItems="center">
                    {Array(5)
                    .fill("")
                    .map((_, i) => (
                        <StarIcon
                        key={i}
                        color={i < property.rating ? "teal.500" : "gray.300"}
                        />
                    ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                        {property.likeCount} likes
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
