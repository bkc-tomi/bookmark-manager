import { useReducer, createContext } from "react";

type ContextValue = {
    searchWord: { word:string },
    setSearchWord: React.Dispatch<any>,
}

const initState:{ word:string } = {
    word: "next",
};

function Reducer(state, action) {
    switch (action.type) {
        case "update":
            return { word: action.word };
        default:
            return state;
    }
}

export const Store = createContext({} as ContextValue);
console.log(Store);

export function Provider({children}:{
    children: React.ReactNode,
}) {
    const [searchWord, setSearchWord] = useReducer(Reducer, initState);
    return (
        <Store.Provider value={{ searchWord, setSearchWord }}>
            { children }
        </Store.Provider>
    );
}