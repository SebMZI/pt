import Image from "../../components/Image/Image"
import RandomImage from "../../components/RandomImage/RandomImage"
import imagesBackgroundContact from "../../data/imagesBackgroundContact"
import Form from "../../components/Form/Form"
import carte from "/assets/img/contact/carte.webp"
import encrier from "/assets/img/contact/encrier.webp"
import papier from "/assets/img/contact/papier.webp"

export default function Contact() {
    return (
        <main
            className="mainContact"
            id="mainContact">
            <RandomImage images={imagesBackgroundContact} />
            <Image
                className="postCard"
                src={carte}
                alt="Carte Postale" />
            <Image
                className="encrier"
                src={encrier}
                alt="Encrier" />
            <Image
                className="papier"
                src={papier}
                alt="Papier" />
            <Form />
            <p>Disponible aux alentours de La Rochelle pour du présentiel. Tél: 06 - 10 - 01 - 36 - 33</p>
        </main>
    )
}