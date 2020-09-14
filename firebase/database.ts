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

/**
 * 指定したユーザーのブックマークを全て取得する。
 * @param uid 
 */
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

export async function getSearchResult(word: string) {
    let result = [];
    await FBdb.collectionGroup("bookmarks").where("status", "==", "public").where("tags", "array-contains", word).get()
    .then(snapshot => {
        snapshot.docs.map(doc => {
            result.push(doc.data());
        })
    });
    return result;
}