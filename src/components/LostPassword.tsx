import { Link, useLocation } from "react-router-dom";

export const LostPassword: React.VFC = () => {
    const { pathname } = useLocation();
    return (
        <>
            <p>ユーザー名はMichaelでパスワードはJacksonです。</p>
            <Link to={pathname}>ログインに戻る。</Link>
        </>
    );
};
