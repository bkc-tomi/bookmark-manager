export function Svg({ children, width, height, rotate, shadowColor }:{
    children: React.ReactNode,
    width: number,
    height: number,
    rotate: number,
    shadowColor?: string,
}) {
    return (
        <div style={{ 
            width: `${ width }px`, 
            height: `${ height }px`, 
            transform: `rotate(${rotate}deg)`,
            filter: `drop-shadow(0px 0px 2px ${ shadowColor || "rgba(0, 0, 0, 0)" })`,
        }}>
            { children }
        </div>
    );
}