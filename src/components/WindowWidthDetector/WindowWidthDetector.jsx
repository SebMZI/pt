import { useState, useEffect } from "react"

export default function WindowWidthDetector({ children }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return children(windowWidth)
}