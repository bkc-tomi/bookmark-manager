import { Logo } from "./logo";
import Styles from "../styles/header.module.css";

export default function Header() {
    return (
        <>
            <header className={ Styles.container }>
                <div>
                    <div>
                        <Logo 
                            size={ 50 }
                            color={ "#ffffff" }
                            rotate={ 0 }
                            shadowColor={ "#fff" }
                        />
                    </div>
                    <h1>bookmark-manager(仮)</h1>
                </div>
            </header>
            <div className={ Styles.hideContainer }>
                <Logo 
                    size={ 50 }
                    color={ "#ffffff" }
                    rotate={-30}
                />
                <h1>bookmark-manager(仮)</h1>
            </div>
        </>
    );
}