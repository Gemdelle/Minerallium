import {useState, useEffect, useRef} from 'react'
import "../styles/components/TimeBar.css"
import PlaySound from "./PlaySound"

export default function TimeBar({time, speed, onFinish}: { time: number, speed: number, onFinish: () => void }) {
    const [width, setWidth] = useState(100);
    const interval = time / speed;

    // const soundRef = useRef<any>(null);
    // let timerSound = new PlaySound();
    // soundRef.current = timerSound;

    useEffect(() => {
        if(width === 30){
            // Play Sound
            // soundRef.current.playTimerSound();
        }
    }, [speed, width])

    // Iniciamos el contador cuando se muestra el componente
    useEffect(() => {
        let timerInterval: NodeJS.Timer;
        const startTimer = () => {
            timerInterval = setInterval(() => {
                // Cuando el width llega a 100%, se acaba el tiempo y limpiamos el contador
                if (width <= 0) {
                    clearInterval(timerInterval);

                    // setTimeout para compensar el delay de la anim. de css fluidez
                    setTimeout(() => {
                        onFinish()
                    }, 200)

                } else {
                    setWidth((prevWidth) => prevWidth - 1);
                }
            }, interval);
        };

        startTimer();

        return () => {
            clearInterval(timerInterval);
        };
    }, [width, time, interval]);

    useEffect(() => {
        setWidth(100);
        return () => {
        };
    }, [interval]);


    return (
        <div className='timer-header'>
            <div className="time-bar">
                <div className="progress" style={{width: width + '%'}}></div>
            </div>
        </div>
    )
}
