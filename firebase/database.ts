import { FBdb } from "./init";
import { bookmark } from "../types/types";

/**
 * ブックマークを保存する関数。
 * @param uid 
 * @param title 
 * @param bookmark 
 */
export async function saveBookmark(uid: string, title: string, bookmark:bookmark):Promise<boolean> {
    const bool:boolean = await FBdb.collection("users").doc(uid).collection("bookmarks").doc(title).set(bookmark)
    .then(() => {
        return true;
    })
    .catch(error => {
        console.log(error);
        return false;
    });
    return bool;
}

export async function getBookmarks(uid: string):Promise<bookmark[]> {
    let bookmarks: bookmark[] = [];
    await FBdb.collection("users").doc(uid).collection("bookmarks").get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            // console.log(doc.data());
            bookmarks.push(doc.data() as bookmark);
        })
    })
    .catch(error => {
        console.log(error);
    });
    return bookmarks;
}
