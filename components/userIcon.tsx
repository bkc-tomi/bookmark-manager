export default function UserIcon({
    img, size,
}:{
    img: string,
    size: number,
}) {
    return (
        <div>
            <img 
                src={ img }
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    borderRadius: "50%",
                }}    
            />
        </div>
    );
}