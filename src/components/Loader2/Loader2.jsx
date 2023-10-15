import { useEffect, useState } from "react"

export default function Loader2() {
    const [counter, setCounter] = useState(3)

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => {
                if (prevCounter === 0) {
                    return 3
                } else {
                    return prevCounter - 1
                }
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <main className="countDown">
            <div className="screen"></div>
            <div className="lines"></div>
            <div className="number">
                {counter}
            </div>
        </main>
    )
}