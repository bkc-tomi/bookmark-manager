import { useRouter } from 'next/router';
import { useEffect } from "react";
import FB from "../firebase/init";
import Layout from "../components/layout";
import { Login } from "../components/login";
import Styles from "../styles/index.module.css";
export default function Index() {
    const router = useRouter();
    useEffect(() => {
        FB.auth().onAuthStateChanged((user:firebase.User) => {
            if (user) {
                router.push("/[user]", `/${user.uid}`);
            }
        });
    }, []);
    return (
        <Layout>
            <div className={ Styles.outer }>
                <div className={ Styles.articleArea }>
                    <img src="/pc-user.png" className={ Styles.pcUser } />
                    <br />
                    <h2 className={ Styles.title }>ブックマークを快適にしませんか？</h2>
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
                    <Login />
                </div>
            </div> 
        </Layout>
    );
}