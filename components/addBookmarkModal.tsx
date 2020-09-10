import { useState } from "react";
import Styles from "../styles/addBookmarkModal.module.css";

export default function AddBookmarkModal() {
    const [modalCls, setModalCls] = useState(Styles.hide);
    
    const [title, setTitle] = useState("");
    const [url, setUrl]     = useState("");
    const [desc, setDesc]   = useState(""); // ブックマークの説明
    const [tag, setTag]     = useState("");
    const [tags, setTags]   = useState<string[]>([]); // ブックマークの説明

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

    const joinTags = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            const tempTags = [...tags];
            if (!tempTags.includes(tag)) {
                tempTags.push(tag);
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

    const submitBookmark = () => {
        console.log("submit");
    }

    return (
        <>
            <div 
                className={ Styles.btn }
                onClick={ handleOpen }
            >
                <svg viewBox="0 0 100 100">
                <defs/>
                <g id="レイヤー 1" opacity="1" fill="#16776f">
                <path d="M3.33454+49.8404C3.33454+24.195+24.1242+3.40541+49.7695+3.40541C75.4148+3.40541+96.2044+24.195+96.2044+49.8404C96.2044+75.4857+75.4148+96.2753+49.7695+96.2753C24.1242+96.2753+3.33454+75.4857+3.33454+49.8404Z"/>
                </g>
                <g id="レイヤー 2">
                <g opacity="1" fill="#d8fce2">
                <path d="M19.1044+42.0917L80.3473+42.0917C83.661+42.0917+86.3473+44.778+86.3473+48.0917L86.3473+51.8542C86.3473+55.1679+83.661+57.8542+80.3473+57.8542L19.1044+57.8542C15.7906+57.8542+13.1044+55.1679+13.1044+51.8542L13.1044+48.0917C13.1044+44.778+15.7906+42.0917+19.1044+42.0917Z"/>
                <path d="M47.596+12.5474L51.7762+12.5474C55.0899+12.5474+57.7762+15.2337+57.7762+18.5474L57.7762+79.6992C57.7762+83.0129+55.0899+85.6992+51.7762+85.6992L47.596+85.6992C44.2823+85.6992+41.596+83.0129+41.596+79.6992L41.596+18.5474C41.596+15.2337+44.2823+12.5474+47.596+12.5474Z"/>
                </g>
                </g>
                </svg>
            </div>

            <div 
                className={ Styles.modalCover + " " + modalCls }
                onClick={ hadnleClose }
            >
                <div 
                    className={ Styles.innerDiv }
                    onClick={ (e) => { e.stopPropagation() }} // クリックが親に伝播してモーダル画面が閉じるのを防ぐ。 
                >
                    <h3>ブックマーク</h3>
                    <div className={ Styles.inputDiv }>
                        <p>サイト名</p>
                        <input className={ Styles.input } type="text" name="site-name" value={ title } onChange={ handleTitle }/> 
                    </div>
                    <div className={ Styles.inputDiv }>
                        <p>URL</p>
                        <input className={ Styles.input } type="url" name="site-url" value={ url } onChange={ handleUrl }/> 
                    </div>
                    <div className={ Styles.inputDiv }>
                        <p>説明</p>
                        <input className={ Styles.input } type="text" name="site-desc" value={ desc } onChange={ handleDesc }/>
                    </div>
                    <div className={ Styles.inputDiv }>
                        <p>タグ</p>
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
                            />
                        </div>
                    </div>

                    <input 
                        type="button" 
                        value="登録"
                        className={ Styles.submit }
                        onClick={ submitBookmark }
                    />
                </div>
            </div>
        </>
    );
}