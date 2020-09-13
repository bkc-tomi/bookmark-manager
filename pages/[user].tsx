import { useState, useEffect, useContext } from "react";
import { FBdb } from "../firebase/init";
import Layout from "../components/layout";
import AddBookmarkModal from "../components/addBookmarkModal";
import FB from "../firebase/init";
import Card from "../components/card";
import Styles from "../styles/user.module.css";
import { bookmark } from "../types/types";
import { Store } from "../components/Store";

export default function User() {
    const [bookmarks, setBookmarks] = useState<bookmark[]>([]);
    const { searchWord, setSearchWord } = useContext(Store);
    useEffect(() => {
        (async() => {
            await FB.auth().onAuthStateChanged((user:firebase.User) => {
                if (user) {
                    const unsubscribe = FBdb.collection("users").doc(user.uid).collection("bookmarks")
                    .onSnapshot(snapshots => {
                        const bms:bookmark[] = [];
                        snapshots.forEach(doc => {
                            bms.push(doc.data() as bookmark);
                        });
                        setBookmarks(bms);
                    });
                    return () => unsubscribe();
                }
            });
        })();
    }, []);
    return (
        <Layout>
            <div className={ Styles.outercontainer }>
                {
                    bookmarks.map((bookmark, key) => {
                        let bool:boolean = false;
                        bookmark.tags.map(tag => {
                            if (tag.indexOf(searchWord.word) != -1) {
                                bool = true;
                            }
                        })
                        if (bool) {
                            return (
                                <Card 
                                    bookmark={ bookmark }
                                    key={ key }
                                />
                            );
                        }
                    })
                }
            </div>
            <AddBookmarkModal />
        </Layout>
    );
}