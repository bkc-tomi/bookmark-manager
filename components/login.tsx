import { useRouter } from 'next/router';
import LoginButton from "./loginButton";
import { signinWithGoogle, signinWithTwitter, signinWithGithub } from "../firebase/auth";
import Styles from "../styles/login.module.css";

export function Login() {
    const router = useRouter();
    const handleLoginGoogle = async() => {
        const [loginCheck, user] = await signinWithGoogle();
        if (loginCheck) {
            router.push("/[user]", `/${ user.uid }`);
        } else {
            alert("ログイン処理が上手く行かなかったようです。もう一度お試しください。");
        }
    }
    const handleLoginTwitter = async() => {
        const [loginCheck, user] = await signinWithTwitter();
        if (loginCheck) {
            router.push("/[user]", `/${ user.uid }`);
        } else {
            alert("ログイン処理が上手く行かなかったようです。もう一度お試しください。");
        }
    }
    const hadleLoginGithub = async() => {
        const [loginCheck, user] = await signinWithGithub();
        if (loginCheck) {
            router.push("/[user]", `/${ user.uid }`);
        } else {
            alert("ログイン処理が上手く行かなかったようです。もう一度お試しください。");
        }
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