import { useContext, useState } from "react";
import Styles from "../styles/globalsearch.module.css";
import Layout from "../components/layout";
import { Store } from "../components/Store";
import GlobalCard from "../components/globalCard";
import { getSearchResult } from "../firebase/database";
import { bookmark } from "../types/types";

export default function SearchResult() {
    const [result, setResult] = useState([]);
    const { State, setState } = useContext(Store);

    const changeWord = (event:React.ChangeEvent<{ value: unknown }>) => {
        setState({ type: "update_word", word: event.target.value });
    }

    const getResult = async() => {
        const result = await getSearchResult(State.word.toLowerCase());
        setResult(result);
    }

    return (
        <Layout>
            <div className={ Styles.container }>
                <h4>- Global Search -</h4>
                <div className={ Styles.searchContainer }>
                    <input 
                        className={ Styles.searchbox } type="text" placeholder="タグ検索"
                        value={ State.word } 
                        onChange={ changeWord }
                    />
                    <div
                        className={ Styles.btn }
                        onClick={ () => getResult() }
                    >
                        検索
                    </div>
                </div>
            </div>
            <div className={ Styles.resultContainer }>
                {
                    result.map((r, key) => {
                        return (
                            <GlobalCard
                                key={ key }
                                bookmark={ r as bookmark }
                            />
                        )
                    })
                }
            </div>
        </Layout>
    );
}
