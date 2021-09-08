import { Link, useLocation } from "react-router-dom";

export const LostPassword: React.VFC = () => {
    const { pathname } = useLocation();
    return (
        <>
            <p>ユーザー名はMichaelでパスワードはJacksonです。</p>
            <p>二回目のログイン画面の場合は逆です。</p>
            <Link to={pathname}>ログインに戻る。</Link>
        </>
    );
};
