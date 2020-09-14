import { useContext } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Styles from "../../styles/globalsearch.module.css";
import { Store } from "../../components/Store";

export default function GlobalSearch() {
    const router = useRouter();
    const { State, setState } = useContext(Store);

    const changeWord = (event:React.ChangeEvent<{ value: unknown }>) => {
        setState({ type: "update_word", word: event.target.value });
    }

    return (
        <Layout>
            <div className={ Styles.container }>
                <h1>Global Search</h1>
                <br />
                <br />
                <br />
                <p>
                    他のユーザーが公開しているブックマークをタグで検索することが出来ます。<br/>
                    他のユーザーのブックマークを検索することで新しい発見があるかも。
                </p>
                <br />
                <br />
                <br />
                <div className={ Styles.searchContainer }>
                    <input 
                        className={ Styles.searchbox } type="text" placeholder="タグ検索"
                        value={ State.word } 
                        onChange={ changeWord }
                    />
                    <div
                        className={ Styles.btn }
                        onClick={ () => { router.push("/global-search/[result", `/global-search/${ State.word }`)}}
                    >
                        検索
                    </div>
                </div>
            </div>
        </Layout>
    );
}