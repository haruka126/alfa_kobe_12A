import { TextAnimation } from "../components/TextAnimation";

export const PageCleared = () => {
    return (
        <>
            <TextAnimation text="おめでとう。<br>
            君は我々の仲間になれる素質があるようだ。<br>
            URLをクリックしてから今までの君の行動は見せてもらった。<br>
            少々手荒ではあったが君の行動力や判断力を試させてもらったよ。<br>
            ゲームデータはすでに手元に戻っているはずだ。すまなかったな。<br>
            君なら優秀なエージェントになれるだろう。<br>
            おや、まさか君は未成年かい？<br>
            それならこちらからのお誘いはやめておこう。<br>
            君たちにはまだこの世界は厳しすぎる。<br>
            惜しいな。こんな人材を置いておくなんて。<br>
            まあいいだろう。仕方がない。<br>
            我々はいつ、どこにでも存在し、君たちを見ている。<br>
            また時が来たら尋ねるとしよう。<br>
            さらばだ諸君。" duration={30} />
            {/* PageLoginAdmin内なのでFooterが2重にならないよう、Footerを呼ばないように */}
        </>
    );
};
