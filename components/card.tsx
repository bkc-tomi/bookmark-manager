import Styles from "../styles/card.module.css";
import { Tags } from "./tags";
import ChangeBookmarkModal from "../components/changeBookmarkModal";
import { bookmark } from "../types/types";
import { saveBookmark } from "../firebase/database";
import { getUser } from "../firebase/auth";
export default function Card({
    bookmark
}:{
    bookmark: bookmark
}) {
    const countUp = async() => {
        const user = await getUser();
        if (user) {
            const newbookmark = {...bookmark};
            if (newbookmark.visitCount) {
                newbookmark.visitCount++;
            } else {
                newbookmark.visitCount=1;
            }
            const bool = await saveBookmark(user.uid, newbookmark.title, newbookmark);
            if (!bool) {
                console.log("error has occur.");
            }
        }

    }
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
                    <p>訪問回数:{ bookmark.visitCount }</p>
                    <a
                        href={ bookmark.url }
                        target="_blank" rel="noopener"
                        className={ Styles.btn }
                        onClick={ countUp }
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