import Link from 'next/link';
import LoginButton from "./loginButton";
import Styles from "../styles/login.module.css";

export function Login() {
    const handleLoginGoogle = () => {
        console.log("google");
    }
    const handleLoginTwitter = () => {
        console.log("twitter");
    }
    const hadleLoginGithub = () => {
        console.log("github");
    }
    return (
        <div className={ Styles.loginBG }>
            <h3>ログイン</h3>
            <p>
                まずはログインしましょう。わざわざアカウントを作る必要はありません。
                ご利用になられているサービスからログインを行うことが出来ます。
                これらのサービスを利用してログインするので、セキュリティーも万全です。
            </p>
            <LoginButton
                color={ "#FF7046" }
                paddingX={ 3 }
                paddingY={ 1 }
                margin={ 2 }
                onclick={ handleLoginGoogle }
            >
                login with Google
            </LoginButton>
            <LoginButton
                color={ "#00A0F4" }
                paddingX={ 3 }
                paddingY={ 1 }
                margin={ 2 }
                onclick={ handleLoginTwitter }
            >
                login with Twitter
            </LoginButton>
            <LoginButton
                color={ "#000000" }
                paddingX={ 3 }
                paddingY={ 1 }
                margin={ 2 }
                onclick={ hadleLoginGithub }
            >
                login with Github
            </LoginButton>
        </div>
    );
}