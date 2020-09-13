import { useState, useContext } from "react";
import Styles from "../styles/searchbox.module.css";
import { Store } from "./Store";

export function SearchBox() {
    const [cls, setCls] = useState(Styles.hide);
    const { searchWord, setSearchWord } = useContext(Store);

    const handleOpen = () => {
        if (cls == "") {
            setCls(Styles.hide);
        } else {
            setCls("");
        }
    }

    const changeWord = (event:React.ChangeEvent<{ value: unknown }>) => {
        setSearchWord({ type: "update", word: event.target.value});
    }
    return (
            <div className={ Styles.container }>
                <input
                    className={ Styles.searchword + " " + cls }
                    type="text"
                    placeholder="タグ検索"
                    value={ searchWord.word }
                    onChange={ changeWord }
                />
                <div 
                    className={ Styles.btn }
                    onClick={ handleOpen }
                >
                    <svg viewBox="0 0 200 200">
                    <g id="レイヤー 2" fill="#eef2f3">
                    <path d="M51.4001+4.19414L147.748+4.19414C173.696+4.19414+194.731+23.9673+194.731+48.3588L194.731+151.363C194.731+175.755+173.696+195.528+147.748+195.528L51.4001+195.528C25.4525+195.528+4.41776+175.755+4.41776+151.363L4.41776+48.3588C4.41776+23.9673+25.4525+4.19414+51.4001+4.19414Z" opacity="1"/>
                    </g>
                    <g id="レイヤー 1" fill="#16776f">
                    <path d="M131.711+14.9404C102.755+14.9404+79.2732+38.4226+79.2732+67.3779C79.2732+96.3332+102.755+119.784+131.711+119.784C160.666+119.784+184.117+96.3332+184.117+67.3779C184.117+38.4226+160.666+14.9404+131.711+14.9404ZM131.492+24.3154C155.401+24.3154+174.804+43.751+174.804+67.7217C174.804+91.6923+155.401+111.128+131.492+111.128C107.583+111.128+88.2107+91.6923+88.2107+67.7217C88.2107+43.751+107.583+24.3154+131.492+24.3154Z" opacity="1"/>
                    <path d="M92.0875+100.484L97.5495+105.97L29.5351+173.688L24.0731+168.202L92.0875+100.484Z" fill="#040404" strokeLinecap="round" opacity="1" strokeLinejoin="round"/>
                    </g>
                    </svg>
                </div>
            </div>
    );
}