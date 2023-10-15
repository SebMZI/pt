import { useState, useEffect } from "react"

export default function TextTyper({ fullText }) {
    const [text, setText] = useState("")
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
    const speed = 70

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentPhraseIndex < fullText.length) {
                setText(fullText[currentPhraseIndex].slice(0, text.length + 1))
            } else {
                clearInterval(intervalId)
                
            }
        }, speed)

        return () => {
        clearInterval(intervalId)
        }
    }, [fullText, currentPhraseIndex, text, speed])

    useEffect(() => {
        if (text === fullText[currentPhraseIndex]) {
            setTimeout(() => {
                setCurrentPhraseIndex((prevIndex) => prevIndex + 1)
                setText("")
            }, 500)
        }
    }, [text, fullText, currentPhraseIndex])

    return (
        <div className="titleCont">
            <p className="loaderTitle" style={{ whiteSpace: "pre-line" }}>
                {text}
            </p>
        </div>
    )
}