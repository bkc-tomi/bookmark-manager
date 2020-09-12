import Styles from "../styles/tags.module.css";

export function Tags({
    tags
}:{
    tags: string[]
}) {
    return (
        <div className={ Styles.container }>
            {
                tags.map((tag, key) => {
                    return (
                        <div 
                            className={ Styles.tagBtn }
                            key={ key }
                        >
                            <p className={ Styles.tagTitle }>{ tag }</p>
                        </div>
                    );
                })
            }
        </div>
    );
}