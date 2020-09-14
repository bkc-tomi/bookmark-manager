import Layout from "../components/layout";
import Styles from "../styles/howto.module.css";
export default function HowTo() {
    return (
        <Layout>
            <div className={ Styles.outercontainer }>
                <div className={ Styles.innerContainer }>
                    <h4>○ menu icon</h4>
                    <p>
                        自分のアカウントのアイコンをクリックするとメニューを開きます。
                        <br />
                        メニューからは以下のページに移動出来ます。
                        <ul>
                            <li>My page</li>
                            <li>Global Search</li>
                            <li>使い方</li>
                            <li>logout</li>
                        </ul>
                    </p>
                </div>
                <div className={ Styles.innerContainer }>
                    <h4>○ My page</h4>
                    <p>
                        自分のブックマークの表示・登録・変更ができるページです。
                    </p>
                    <ul>
                        <li>
                            <h5>登録</h5>
                            <p>
                                説明とタグを付ける時は、ページの内容はもちろん検索したときの
                                に悩んでいたことや、そのページを見つけるまでに使用したワードを
                                加えておくと、同じような悩みで検索した人が検索しやすくなります。
                            </p>
                        </li>
                        <li>
                            <h5>変更</h5>
                        </li>
                        <li>
                            <h5>ブックマークしたサイトを開く</h5>
                        </li>
                    </ul>
                </div>
                <div className={ Styles.innerContainer }>
                    <h4>○ Global Search</h4>
                    <p>
                        このサイトのユーザーが公開しているブックマークを検索することが出来ます。
                        ユーザーがタグ付けをしてくれているのでGoogleで検索するよりも簡単にお目当ての記事を
                        見つけることができるかも。
                    </p>
                </div>
                <div className={ Styles.innerContainer }>
                    <h4>○ logout</h4>
                    <p>
                        ログアウトしたい時に押してください。
                    </p>
                </div>
                
            </div>
        </Layout>
    );
}