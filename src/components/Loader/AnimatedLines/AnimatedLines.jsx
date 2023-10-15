import { useEffect, useState } from "react"
import gsap from "gsap"

export default function AnimatedLines() {
    const [linesCreated, setLinesCreated] = useState(false)

    useEffect(() => {
        if (!linesCreated) {
            const lineContainer = document.querySelector(".loader")

            if (lineContainer) {
                for (let i = 0; i < 1; i++) {
                    const line = document.createElement("div")
                    line.className = "line"
                    lineContainer.appendChild(line)

                    gsap.to(line, {
                        duration: gsap.utils.random(0.5, 5),
                        opacity: gsap.utils.random(0.1, 0.7),
                        x: gsap.utils.random(-window.innerWidth / 2, window.innerWidth / 2),
                        repeat: -1,
                        ease: "rough({strength: 0.5, points: 10, randomize: true, taper: 'none'})",
                        onComplete: () => {
                            setLinesCreated(true)
                        }
                    })
                }
            }
        }
    }, [linesCreated])

    return null
}