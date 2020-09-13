import { useEffect } from "react";
import { AppProps } from 'next/app';
import FB from "../firebase/init";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        (async() => {
            await FB.auth().onAuthStateChanged((user:firebase.User) => {
                if (user) {
                    console.log("login:" + user.displayName);
                } else {
                    console.log("no one logged in.")
                }
            });
        })();
    }, []);
    return (
        <Component {...pageProps} />
    ); 
    }

export default App;