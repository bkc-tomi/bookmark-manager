import Head from 'next/head';
import Header from "./header";
/**
 * header, firebase objectを読み込ませる予定
 * 全てのpageをこのコンポーネントでラップする。
 */
export const SiteTitle = "SIORIN - Bookmark Manager -"

export default function Layout({ children }:{ children: React.ReactNode }) {
    
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