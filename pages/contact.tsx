import { useState } from "react";
import Layout from "../components/layout";
import Styles from "../styles/contact.module.css";

export default function Contact() {
    const [mail, setMail] = useState("");
    const [text, setText] = useState("");

    const changeMail = (event: React.ChangeEvent<{ value: unknown }>) => {
        setMail(event.target.value as string);
    }
    const changeText = (event: React.ChangeEvent<{ value: unknown }>) => {
        setText(event.target.value as string);
    }

    const submitMessage = async() => {
        
    }
    
    return (
        <Layout>
            <div className={ Styles.outerContainer }>
                <div className={ Styles.innerContainer }>
                    <p>メールによるお問い合わせは以下からお願いします。</p>
                    <a 
                        href="https://tayori.com/form/2940f19847246f9baccfe55bdaeec27672a04f02"
                        target="_blank" rel="noopener"
                        className={ Styles.btn }
                    >
                        お問い合わせフォームを開く
                    </a>
                </div>
                <div className={ Styles.innerContainer }>
                    <p>TwitterからDMでのお問い合わせも受け付けております。</p>
                    <a
                        href="https://twitter.com/bkc30002594"
                        target="_blank" rel="noopener"
                        className={ Styles.btn }
                    >Twitterを開く</a>
                </div>
            </div>
        </Layout>
    );
}