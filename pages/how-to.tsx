import Layout from "../components/layout";
import Styles from "../styles/howto.module.css";
export default function HowTo() {
    return (
        <Layout>
            <div className={ Styles.outerContainer }>
                <div className={ Styles.innerContainer }>
                    <h4>○ menu icon</h4>
                    <p>
                        自分のアカウントのアイコンをクリックするとメニューを開きます。
                        閉じる時はもう一度アイコンをクリックします。
                        <br />
                        メニューからは以下のページに移動出来ます。
                    </p>
                    <ul>
                        <li>My page</li>
                        <li>Global Search</li>
                        <li>使い方</li>
                        <li>お問い合わせ</li>
                        <li>logout</li>
                    </ul>
                    <img 
                        src="/menuicon.png"
                        className={ Styles.img }  
                    />
                </div>
                <div className={ Styles.innerContainer }>
                    <h4>○ My page</h4>
                    <p>
                        自分のブックマークの表示・登録・変更ができるページです。
                    </p>
                    <ul>
                        <li className={ Styles.list }>
                            <h5>登録</h5>
                            <p>
                                登録はMy Pageから行います。マイページ右下の＋マークをクリックすると、
                                登録用のフォームが出てきます。必要事項を入力して登録を押せば完了です。
                                公開にチェックを入れると他のユーザーから検索できるようになります。
                            </p>
                            <div className={ Styles.imgBox }>
                                <img 
                                    src="/submit.png"
                                    className={ Styles.rowimg }   
                                />
                                <img 
                                    src="/submit2.png"
                                    className={ Styles.rowimg }     
                                />
                            </div>
                            <p>
                                説明を入力すると説明の内容から自動でタグが生成されます。
                                精度は低いので不必要なものは削除し、必要なものは付け足してください。
                                このタグを検索の際に使います。
                            </p>
                            <p>
                                登録するときのコツは、なぜそのサイトを知れ部たのかも残しておくことです。
                                例えばそのサイトを見つける際に使用した検索ワードや、どういった理由で検索したかなど。
                                これをタグに単語で残しておくことで、忘れたときに見つけやすくなります。
                            </p>
                            <p>
                                登録が終わるとページにブックマークしたサイトが表示されます。
                                自分のアイコンの横にある検索ボックスで入力した文字が含まれるタグがついているブックマーク
                                を検索することができます。
                                <br />
                                またタグをクリックすると検索ボックスにタグの文字が入り、同様のタグのついたサイトを検索することもできます。
                            </p>
                        </li>
                        <li className={ Styles.list }>
                            <h5>変更＆サイトを開く</h5>
                            <p>
                                変更のボタンを押すと内容を編集することができます。
                            </p>
                            <p>
                                「サイトへ」ボタンでブックマークしたサイトを開きます。
                            </p>
                            <img 
                                src="/bm-card.png"
                                className={ Styles.img }
                            />
                        </li>
                    </ul>
                </div>
                <div className={ Styles.innerContainer }>
                    <h4>○ Global Search</h4>
                    <p>
                        このサイトのユーザーが公開しているブックマークを検索することが出来ます。
                        ユーザーがタグ付けをしてくれているのでGoogleで検索するよりも簡単にお目当ての記事を
                        見つけることができるかも知れません。
                        <br />
                        検索ボックスに入力した文字列と一致するタグのブックマークを検索し表示します。
                        <br />
                        今のところMy Pageと異なり検索ワードと完全一致したタグを持つブックマークしかヒットしません。
                    </p>
                    <img 
                        src="/global-search.png"
                        className={ Styles.img }
                    />
                </div>
                <div className={ Styles.innerContainer }>
                    <h4>○ logout</h4>
                    <p>
                        ログアウトしたい時に押してください。ログアアウトに成功するとトップページに戻ります。
                    </p>
                </div>
                
            </div>
        </Layout>
    );
}