import AnimatedLines from "./AnimatedLines/AnimatedLines"
import AnimatedText from "./AnimatedText/AnimatedText"
import TextTyper from "../TextTyper/TextTyper"

const text = [
    "Ahhhh! Vous voila enfin!",
    "Prenez place,",
    "installez vous confortablement",
    "et profitez du spectacle !"
]

export default function Loader() {

    return (
        <main
            role="main"
            className="loader"
            id="loader">
            <div>
                <TextTyper
                    fullText={text} />
                <AnimatedText />
                <AnimatedLines />
                <AnimatedLines />
            </div>
        </main>
    )
}