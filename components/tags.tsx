import { useContext } from "react";
import Styles from "../styles/tags.module.css";
import { Store } from "./Store";

export function Tags({
    tags
}:{
    tags: string[]
}) {
    const { searchWord, setSearchWord } = useContext(Store);

    const setWord = (event:React.MouseEvent<HTMLDivElement>) => {
        // @ts-ignore
        setSearchWord({ type: "update", word: event.target.innerHTML as string});
    }
    return (
        <div className={ Styles.container }>
            {
                tags.map((tag, key) => {
                    return (
                        <div 
                            className={ Styles.tagBtn }
                            key={ key }
                            onClick={ setWord }
                        >
                            <p className={ Styles.tagTitle }>{ tag }</p>
                        </div>
                    );
                })
            }
        </div>
    );
}