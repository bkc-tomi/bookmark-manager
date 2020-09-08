import Head from 'next/head';
import { useEffect } from 'react';
import FB from "../firebase/init";
import Header from "./header";
/**
 * header, firebase objectを読み込ませる予定
 * 全てのpageをこのコンポーネントでラップする。
 */
export const SiteTitle = "ブックマークマネージャー(仮)"

export default function Layout({ children }:{ children: React.ReactNode }) {
    useEffect(() => {
        (async() => {
            await FB.auth().onAuthStateChanged((user: firebase.User) => {
                if (user) {
                    console.log("login:", user.displayName);
                } else {
                    console.log("no one logged in.");
                }
            });
        });
        console.log("do");
    }, []);
    
    return (
        <>
            <Head>
                <title>{ SiteTitle }</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="this is bookmark manager with tag searching."
                />
                
            </Head>
            <Header />
            <main>
                { children }
            </main>
        </>
    );
}