import Styles from "../styles/login.module.css";

export default function LoginButton({
    children, color, margin, paddingX, paddingY, onclick
}:{
    children: React.ReactNode,
    color: string,
    margin?: number,
    paddingX?: number,
    paddingY?: number,
    onclick: Function,
}) {
    return (
        <a
            className={ Styles.btn }
            style={{ 
                color: color, 
                borderColor: color, 
                margin: `${ margin }rem` || "1rem",
                padding: `${ paddingY }rem ${ paddingX }rem` || "1rem 2rem",
            }}
            onClick={ () => onclick() }
        >
            { children }
        </a>
    );
}