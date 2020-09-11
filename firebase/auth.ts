import FB, { googleProvider, twitterProvider, githubProvider } from "./init";

/**
 * グーグルアカウントを使用した認証
 * 成功したらtrue, 失敗したらfalseを返す。
 */
export const signinWithGoogle = async():Promise<[boolean, firebase.User]> => {
    const [bool, user] = await FB.auth().signInWithPopup(googleProvider)
    .then(result => {
        console.log(result);
        return [true, result.user];
    })
    .catch(error => {
        console.log(error);
        return [false, null];
    });
    return [bool, user];
}

/**
 * ツイッターアカウントを使用した認証
 * 成功したらtrue, 失敗したらfalseを返す。
 */
export const signinWithTwitter = async():Promise<[boolean, firebase.User]> => {
    const [bool, user] = await FB.auth().signInWithPopup(twitterProvider)
    .then(result => {
        console.log(result);
        return [true, result.user];
    })
    .catch(error => {
        console.log(error);
        return [false, null];
    });
    return [bool, user];
}

/**
 * ギットハブアカウントを使用した認証
 * 成功したらtrue, 失敗したらfalseを返す。
 */
export const signinWithGithub = async():Promise<[boolean, firebase.User]> => {
    const [bool, user] = await FB.auth().signInWithPopup(githubProvider)
    .then(result => {
        console.log(result);
        return [true, result.user];
    })
    .catch(error => {
        console.log(error);
        return [false, null];
    });
    return [bool, user];
}

/**
 * ログアウト処理
 * 成功したらtrue, 失敗したらfalseを返す。
 */
export const logout = async():Promise<boolean> => {
    const bool:boolean = await FB.auth().signOut()
    .then(() => {
        return true;
    })
    .catch(error => {
        console.log(error);
        return false;
    });
    return bool;
}

export const getUser = async() => {
    let user:firebase.User = null;
    await FB.auth().onAuthStateChanged((u:firebase.User) => {
        if (u) {
            user = u;
        }
    });
    return user;
}

