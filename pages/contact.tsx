import { useState } from "react";
import Layout from "../components/layout";
import { FBfunction } from "../firebase/init";
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
        const data = {
            mail: mail,
            message: text,
        };
        const sendMessage = FBfunction.httpsCallable("sendMessage");
        sendMessage(data)
        .then(result => {
            console.log(result);
            setMail("");
            setText("");
            alert("送信しました。");
        })
        .catch(error => {
            console.log(error);
            alert("送信に失敗しました。");
        });
    }
    
    return (
        <Layout>
            <div className={ Styles.outerContainer }>
                <div className={ Styles.innerContainer }>
                    <h3>お問い合わせ</h3>
                    <p>問題や要望があればこちらにお願いします。</p>
                    <div className={ Styles.inputDiv }>
                        <label>メールアドレス
                            <span style={{ fontSize: "10px" }}>
                                (折り返しの返事が必要であれば入力してください。)
                            </span>
                        </label>
                        <input 
                            type="email" className={ Styles.input } 
                            value={ mail } onChange={ changeMail }/>
                    </div>

                    <div className={ Styles.inputDiv }>
                        <label>内容</label>
                        <textarea 
                            className={ Styles.input } rows={ 4 }
                            value={ text } onChange={ changeText }
                        ></textarea>
                    </div>
                    <div className={ Styles.btn }>送信</div>
                </div>
                <div>
                    twitter
                </div>
            </div>
        </Layout>
    );
}