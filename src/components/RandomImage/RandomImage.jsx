import React, { useState, useEffect } from "react"
import Image from "../Image/Image"
import imagesBackgroundContact from "../../data/imagesBackgroundContact"

export default function RandomImage() {
    const [randomImage, setRandomImage] = useState(null)
    const [isVisible, setIsVisible] = useState(false)

    const chooseRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * imagesBackgroundContact.length)
        const randomImg = imagesBackgroundContact[randomIndex]
        setRandomImage(randomImg);
        setIsVisible(true)
        setTimeout(() => {
            setIsVisible(false)
        }, 2500)
    }

    useEffect(() => {
        chooseRandomImage()
    }, [])

    useEffect(() => {
        const interval = setInterval(chooseRandomImage, 4200)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className={`randomImageContainer ${isVisible ? "show" : ""}`}>
            {randomImage && (
                <Image className="randomImage" src={randomImage} alt="Image aléatoire" />
            )}
        </div>
    )
}