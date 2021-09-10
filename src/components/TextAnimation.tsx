import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { useCallback } from 'react';

type Props = {
    children: React.ReactNode;
    onComplete?: Function;
};

export const TextAnimation: React.VFC<Props> = ({ children, onComplete }) => {
    const onCompleteCallback = useCallback(() => {
        if (onComplete)
            onComplete();
    // eslint-disable-next-line react-hooks/exhaustive-deps      
    }, []);

    const setAnimation = (text: string) => {
        gsap.registerPlugin(TextPlugin)
        gsap.to(".text", {
            duration: text.length * 0.1,
            text: {
                value: text,
            },
            ease: 'none',
            onComplete: onCompleteCallback
        });
    };

    const Ref = useCallback((node) => {
        if (node !== null) {
            node.style.width = node.clientWidth + "px";
            node.style.height = node.clientHeight + "px";
            setAnimation(node.innerHTML);
            node.innerHTML = "";
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps      
    }, []);

    return <p ref={Ref} className="text">{children}</p>;
};
