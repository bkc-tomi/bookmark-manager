import { useContext, useState } from "react";
import Styles from "../styles/globalsearch.module.css";
import Layout from "../components/layout";
import { Store } from "../components/Store";
import Card from "../components/card";
import { getSearchResult } from "../firebase/database";

export default function SearchResult() {
    const [result, setResult] = useState([]);
    const { State, setState } = useContext(Store);

    const changeWord = (event:React.ChangeEvent<{ value: unknown }>) => {
        setState({ type: "update_word", word: event.target.value });
    }

    const getResult = async() => {
        const result = await getSearchResult(State.word.toLowerCase());
        console.log(result);
        setResult(result);
    }

    return (
        <Layout>
            <div className={ Styles.container }>
                <h5>Global Search: result</h5>
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
                <div>
                    {
                        result.map((r, key) => {
                            return (
                                <Card
                                    key={ key }
                                    bookmark={ r }
                                />
                            )
                        })
                    }
                </div>
            </div>
        </Layout>
    );
}
