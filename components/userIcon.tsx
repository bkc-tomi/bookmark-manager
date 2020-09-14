import { useState, useContext } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import { logout } from "../firebase/auth";
import Styles from "../styles/usericon.module.css";
import { Store } from "./Store";
export default function UserIcon({
    img, size,
}:{
    img: string,
    size: number,
}) {
    const { State, setState } = useContext(Store);
    const [cls, setCls] = useState(Styles.hide);
    const router = useRouter();

    const hadnleLogout = async() => {
        const bool = await logout();
        if (bool) {
            console.log("logout");
            setState({ type: "update_user", user: null});
            router.push("/");
        } else {
            alert("ログアウトに失敗しました。");
        }
    }

    const toggleModal = () => {
        if (cls == "") {
            setCls(Styles.hide);
        } else {
            setCls("");
        }
    }
    return (
        <div className={ Styles.contaniner }>
            <div 
                className={ Styles.icon }
                onClick={ toggleModal } 
            >
                <img 
                    src={ img }
                    style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        borderRadius: "50%",
                    }}
                />
                <p className={ Styles.iconMenu }>menu</p>
            </div>
            <div className={ Styles.modal + " " + cls }>
                <Link href="[user]" as={ State.user.uid }>
                    <p>My Page</p>
                
                </Link>
                <Link href="global-search">
                    <p>Global Search</p>
                
                </Link>
                <Link href="how-to">
                    <p>使い方</p>
                
                </Link>
                <p
                    onClick={ hadnleLogout }
                >logout</p>
            </div>
        </div>
    );
}