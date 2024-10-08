import { useEffect, useState } from "react"


export const MouseHoverCircle = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleOnMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        }
        
        window.addEventListener('mousemove', handleOnMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleOnMouseMove);
        }
    });

    return (
        <div
            className="fixed rounded-full bg-teal-700 dark:bg-gray-400 opacity-10 transition-transform ease-in-out"
            style={{
                width: '600px',
                height: '600px',
                top: position.y  + 'px',
                left: position.x  + 'px',
                transform: 'translate(-50%, -50%)',
                zIndex: 1,
                filter: 'blur(100px)', 
                pointerEvents: 'none'
            }}
        ></div>
    )
}

export default MouseHoverCircle;