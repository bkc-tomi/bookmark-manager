import Styles from "../styles/card.module.css";
import { Tags } from "./tags";
import ChangeBookmarkModal from "../components/changeBookmarkModal";
import { bookmark } from "../types/types";

export default function Card({
    bookmark
}:{
    bookmark: bookmark
}) {
    return (
        <div className={ Styles.container }>
            <div className={ Styles.inner }>
                <h5
                    className={ Styles.title }
                    style={{ color: bookmark.themeColor }}
                >{ bookmark.title }</h5>
                <p
                    className={ Styles.status }
                >{ 
                    bookmark.status === "private" ?　"非公開" : "公開"
                }</p>
            </div>
            <p
                className={ Styles.description }
            >{ bookmark.description }</p>
            <Tags
                tags={ bookmark.tags }
            />
            <div className={ Styles.btnDiv }>
                <div className={ Styles.btnDivinner }>
                    <a
                        href={ bookmark.url }
                        target="_blank" rel="noopener"
                        className={ Styles.btn }
                    >サイトへ</a>
                </div>
                <div className={ Styles.btnDivinner }>
                    <ChangeBookmarkModal
                        bookmark={ bookmark }
                    />
                </div>
            </div>
        </div>
    );
}