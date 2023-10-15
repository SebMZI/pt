import { useEffect, useRef } from "react"
import gsap from 'gsap'

export default function AnimatedDots({ numberOfDots, dotDuration = 0.1 }) {
    const dotContainerRef = useRef(null)
    const dotRefs = useRef([])

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 })

        while (dotRefs.current.length > numberOfDots) {
            const dotToRemove = dotRefs.current.pop()
            dotToRemove.remove()
        }

        for (let i = dotRefs.current.length; i < numberOfDots; i++) {
            const dot = document.createElement("div")
            dot.classList.add("dot")
            dotRefs.current[i] = dot
            dotContainerRef.current.appendChild(dot)

            tl.to(dot, {
                duration: dotDuration,
                opacity: 0,
                repeat: 1,
                yoyo: true,
                onComplete: () => setDotPosition(dot),
                onCompleteParams: [dot],
                ease: "rough({strength: 0.5, points: 10, randomize: true, taper: 'none'})",
            }, 0)
        }
    }, [numberOfDots, dotDuration])

    const setDotPosition = (dot) => {
        gsap.set(dot, {
            x: gsap.utils.random(-window.innerWidth / 2, window.innerWidth / 2),
            y: gsap.utils.random(-window.innerHeight, window.innerHeight),
            delay: gsap.utils.random(0, 1),
        })
    }

    return (
        <div
            ref={dotContainerRef}
            className="dot-container" >
        </div>
    )
}