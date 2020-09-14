import Head from 'next/head';
import Header from "./header";
/**
 * header, firebase objectを読み込ませる予定
 * 全てのpageをこのコンポーネントでラップする。
 */
export const SiteTitle = "SIORIN - Bookmark Manager -";
export const Description = "このサイトはブックマークを管理するサイトです。ブックマークを大量に登録しても、タグ検索で簡単に検索できます。また他のユーザーが公開しているブックマークも検索することができます。";

export default function Layout({ children }:{ children: React.ReactNode }) {
    
    return (
        <>
            <Head>
                <title>{ SiteTitle }</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content={ Description }
                />
                <meta name="theme-color" content="#16776f" />
                <meta property="og:title" content={ SiteTitle }></meta>
                <meta property="og:url" content="https://siorin.vercel.app/"></meta>
                <meta property="og:description" content={ SiteTitle }></meta>
                <meta property="og:image" content="https://siorin.vercel.app/static/siori.svg"></meta>
            </Head>
            <Header />
            <main>
                { children }
            </main>
        </>
    );
}