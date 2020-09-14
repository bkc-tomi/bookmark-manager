import { useReducer, createContext } from "react";

type state = {
    user: firebase.User,
    word: string,
}

type ContextValue = {
    State: state,
    setState: React.Dispatch<any>,
}

const initState:state = {
    user: null,
    word: "",
};

function Reducer(state, action) {
    switch (action.type) {
        case "update_word":
            return { user: state.user, word: action.word };
        case "update_user":
            return { user: action.user, word: state.word };
        default:
            return state;
    }
}

export const Store = createContext({} as ContextValue);

export function Provider({children}:{
    children: React.ReactNode,
}) {
    const [State, setState] = useReducer(Reducer, initState);
    return (
        <Store.Provider value={{ State, setState }}>
            { children }
        </Store.Provider>
    );
}