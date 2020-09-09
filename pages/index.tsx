import Layout from "../components/layout";
import Styles from "../styles/index.module.css";
export default function Index() {
    return (
        <Layout>
            <div className={ Styles.outer }>
                <div className={ Styles.articleArea }>
                    <img src="/pc-user.png" className={ Styles.pcUser } />
                    <br />
                    <h2>ブックマークを快適にしませんか？</h2>
                    <ul>
                        <li>ブックマークをたくさんし過ぎた…</li>
                        <li>探したいブックマークが見つからない</li>
                        <li>調べたいサイトが見つからない。昔ブックマークしたからあるはずなんだけど…</li>
                    </ul>
                    <p>
                        こんな経験ありませんか？このサイトを使えば簡単にブックマークとその検索が出来ます。
                        <br />
                        ウェブアプリなのでPC・スマホ、ブラウザを気にせず使うことができます。
                        <br />
                        壊れてなくなる心配もありません。
                    </p>
                    <br />
                    <p>知らんけど</p>
                    <p></p>
                </div>
                <div className={ Styles.loginArea }>
                    <div className={ Styles.loginBG }>
                        <h3>ログイン</h3>
                        <p>
                            まずはログインしましょう。わざわざアカウントを作る必要はありません。
                            ご利用になられているサービスからログインを行うことが出来ます。
                            これらのサービスを利用してログインするので、セキュリティーも万全です。
                        </p>
                    </div>
                    
                </div>
            </div> 
        </Layout>
    );
}