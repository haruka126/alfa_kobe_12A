import { Text } from '@chakra-ui/layout';
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { useCallback, useEffect } from 'react';

type Props = {
    text: string;
    duration: number; // 秒
};

export const TextAnimation: React.VFC<Props> = ({ text, duration }) => {
    const setAnimation = useCallback(() => {
        gsap.to(".ret", {
            duration: duration,
            text: {
              value: text,
              delimiter: "",
            },
            ease: "none"
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps      
    }, []);

    useEffect(() => {
        gsap.registerPlugin(TextPlugin);
        setAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps      
    }, []);

    return <Text className="ret" />;
};
