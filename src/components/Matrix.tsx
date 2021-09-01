// 速度向上のためeslintを一部無効化しています。

import { useRef, useMemo, useEffect, useCallback } from "react";

interface Props {
    fontSize?: number;
    speed?: number;
    fullscreen?: boolean;
    width?: number;
    height?: number;
    chars?: string;
    style?: object;
};

export const Matrix: React.VFC<Props> = ({ fontSize = 12, speed: interval = 33, chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789#$%^&*()*&^%", fullscreen = true, width = -1, height = -1, style }) => {
    if (!fullscreen && (width === -1 || height === -1))
        throw new Error("Whenever fullscreen is false, width and height must be specified.");

    if (fullscreen) {
        width = window.innerWidth;
        height = window.innerHeight;
    }

    let drops = useMemo(() =>
    // eslint-disable-next-line react-hooks/exhaustive-deps
        Array(Math.floor(width / fontSize)).fill(1), [width]);

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const draw = useCallback(() => {
        const canvas: any = canvasRef.current;
        if (!canvas)
            return;
        else {
            const context = canvas.getContext("2d");
            context.fillStyle = "rgba(0, 0, 0, 0.05)";
            context.fillRect(0, 0, width, height);
            context.fillStyle = "#0f0";
            context.font = fontSize + "px arial";

            for (let i = 0; i < drops.length; ++i) {
                context.fillText(
                    chars[Math.floor(Math.random() * chars.length)],
                    i * fontSize,
                    drops[i] * fontSize);
                if (drops[i] * fontSize > height && Math.random() > 0.975)
                    drops[i] = 0;
                ++drops[i];
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (fullscreen)
            window.addEventListener("resize", () => document.location.reload())
        setInterval(draw, interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <canvas style={style} ref={canvasRef} width={width} height={height} />;
};
