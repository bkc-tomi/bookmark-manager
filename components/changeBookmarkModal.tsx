import { useRouter } from 'next/router';
import { useState } from "react";
import { getUser } from "../firebase/auth";
import Styles from "../styles/addBookmarkModal.module.css";
import { saveBookmark } from "../firebase/database";
import { bookmark } from "../types/types";

export default function ChangeBookmarkModal({
    bookmark
}:{
    bookmark: bookmark,
}) {
    const router = useRouter();
    const [modalCls, setModalCls] = useState(Styles.hide);
    const [btnActive, setBtnAcitve] = useState(true);
    const [title, setTitle] = useState(bookmark.title);
    const [url, setUrl]     = useState(bookmark.url);
    const [desc, setDesc]   = useState(bookmark.description); // ブックマークの説明
    const [tag, setTag]     = useState("");
    const [tags, setTags]   = useState<string[]>(bookmark.tags); // ブックマークの説明
    const [color, setColor] = useState(bookmark.themeColor);
    const [status, setStatus] = useState<"private" | "public">(bookmark.status);

    // モーダルを開く
    const handleOpen = () => {
        setModalCls("");
    }
    // モーダルを閉じる
    const hadnleClose = () => {
        setModalCls(Styles.hide);
    }

    const handleTitle = (event:React.ChangeEvent<{ value: unknown }>) => {
        setTitle(event.target.value as string);
    }
    const handleUrl = (event:React.ChangeEvent<{ value: unknown }>) => {
        setUrl(event.target.value as string);
    }
    const handleDesc = (event:React.ChangeEvent<{ value: unknown }>) => {
        setDesc(event.target.value as string);
    }
    const handleTag = (event:React.ChangeEvent<{ value: unknown }>) => {
        setTag(event.target.value as string);
    }
    const handleColor = (event:React.ChangeEvent<{ value: unknown }>) => {
        setColor(event.target.value as string);
    }
    const handleStatus = (status: "private" | "public") => {
        setStatus(status);
    }

    const joinTags = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            const tempTags = [...tags];
            if (!tempTags.includes(tag.toLowerCase())) {
                tempTags.push(tag.toLowerCase());
                setTags(tempTags);
                setTag("");
            } else {
                alert("すでに登録しているタグです。");
            }
        }
    }

    const clearTag = (event:React.MouseEvent<HTMLParagraphElement> ) => {
        // @ts-ignore
        const tag = event.target.title;
        const tempTags = [...tags];
        const t = tempTags.filter(tempTag => tempTag !== tag);
        setTags(t);
    }

    const submitBookmark = async() => {
        setBtnAcitve(false);
        const user = await getUser();
        const bookmark:bookmark = {
            title: title,
            url:   url,
            description: desc,
            tags: tags,
            themeColor: color,
            status: status,
        }
        // console.log(bookmark);
        if (user) {
            // console.log(user);
            const bool = await saveBookmark(user.uid, title, bookmark);
            if (bool) {
                alert("保存しました。");
                router.reload();
            } else {
                alert("保存に失敗しました。もう一度お願いします。");
            }
        } else {
            alert("ログイン出来ていないようです。ログインしてください。");
        }
        setBtnAcitve(true);
    }

    return (
        <>
            <a
                onClick={ handleOpen }
                className={ Styles.changeBtn }
            >変更</a>

            <div 
                className={ Styles.modalCover + " " + modalCls }
                onClick={ hadnleClose }
            >
                <div 
                    className={ Styles.innerDiv }
                    onClick={ (e) => { e.stopPropagation() }} // クリックが親に伝播してモーダル画面が閉じるのを防ぐ。 
                >
                    <h3>ブックマークの変更</h3>
                    <div className={ Styles.inputDiv }>
                        <label>サイト名</label>
                        <input className={ Styles.input } type="text" name="site-name" value={ title } disabled onChange={ handleTitle }/> 
                    </div>
                    <div className={ Styles.inputDiv }>
                        <label>URL</label>
                        <input className={ Styles.input } type="url" name="site-url" value={ url } onChange={ handleUrl }/> 
                    </div>
                    <div className={ Styles.inputDiv }>
                        <label>説明</label>
                        <textarea className={ Styles.input } rows={ 3 } name="site-desc" value={ desc } onChange={ handleDesc }/>
                    </div>
                    <div className={ Styles.inputDiv }>
                        <label>テーマカラー(任意)</label>
                        <input className={ Styles.input } type="color" name="site-color" value={ color } onChange={ handleColor }/>
                    </div>
                    <div className={ Styles.inputDiv }>
                        <label>タグ</label>
                        <div className={ Styles.tagDiv }>
                            {
                                tags.map((tag, key) => {
                                    return (
                                        <div 
                                            className={ Styles.tagBtn }
                                            key={ key }
                                        >
                                            <p className={ Styles.tagTitle }>{ tag }</p>
                                            <p 
                                                className={ Styles.clear }
                                                onClick={ clearTag }
                                                title={ tag } 
                                            >×</p>
                                        </div>
                                    );
                                })
                            }
                            <input 
                                className={ Styles.tag } 
                                type="text" name="site-tag" value={ tag } 
                                onChange={ handleTag }
                                onKeyPress={ joinTags }
                                disabled={ !btnActive }
                            />
                        </div>
                    </div>
                    <div className={ Styles.inputDiv }>
                        <label>状態<span style={{ fontSize: "10px" }}>(検索機能はまだ未実装です。)</span></label>
                        <div>
                            <input type="radio" name="status" value="private" checked={ status == "private"} onChange={ () => handleStatus("private") }/>
                            <label>非公開</label>
                        </div>
                        <div>
                            <input type="radio" name="status" value="public" checked={ status == "public" } onChange={ () => handleStatus("public") }/>
                            <label>公開<span style={{ fontSize: "10px" }}>(このサイトを利用している全てのユーザーから検索可能にします。)</span></label>
                        </div>
                    </div>

                    <input 
                        type="button" 
                        value="登録"
                        className={ Styles.submit }
                        onClick={ submitBookmark }
                    />
                    <div
                        onClick={ hadnleClose }
                        className={ Styles.closebtn }
                    >×</div>
                </div>
            </div>
        </>
    );
}