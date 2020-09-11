import { useState, useEffect } from "react";
import { FBdb } from "../firebase/init";
import Layout from "../components/layout";
import AddBookmarkModal from "../components/addBookmarkModal";
import { getUser } from "../firebase/auth";
import { getBookmarks } from "../firebase/database";

import { bookmark } from "../types/types";

export default function User() {
    const [bookmarks, setBookmarks] = useState<bookmark[]>([]);
    useEffect(() => {
        (async() => {
            const user =  await getUser();
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
        })();
    }, []);
    return (
        <Layout>
            {
                bookmarks.map((bookmark, key) => {
                    return (
                        <div key={ key }>
                            <a 
                                href={ bookmark.url }
                                target="_blank" rel="noopener"
                                style={{ color: bookmark.themeColor }}
                            >{ bookmark.title }</a>
                        </div>
                    );
                })
            }
            <AddBookmarkModal />
        </Layout>
    );
}