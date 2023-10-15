import { useEffect } from "react"
import gsap from "gsap"

export default function AnimatedText() {
    useEffect(() => {
        const titles = document.querySelectorAll(".loaderTitle")
        const tl = gsap.timeline({ repeat: -1 })

        const animateTitle = (titleClone) => {
            tl.to(titleClone, {
                duration: gsap.utils.random(0.03, 0.17),
                opacity: gsap.utils.random(0.3, 0.8),
                y: gsap.utils.random(-1.5, 1.5),
                x: gsap.utils.random(-1.5, 1.5),
            })
        }

        titles.forEach((title) => {
        const titleClone = title.cloneNode(true)
        titleClone.classList.add("overTitle")
        title.parentElement.appendChild(titleClone)
        animateTitle(titleClone)
        })
    }, [])

    return null
}