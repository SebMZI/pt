import React from 'react'
import Image from "../Image/Image"
import Paragraph from "../Paragraph/Paragraph"

export default function ProjectDescription({ currentIndex, projectList }) {

    return (
        <div className="projectDescriptionOverlay">
            <div className="projectDescription">
                <h2>{projectList[currentIndex].title}</h2>
                <h3>Description:</h3>
                <div>
                    {projectList[currentIndex].description.map((paragraph, index) => (
                        <Paragraph
                            key={index}
                            text={paragraph} />
                    ))}
                </div>
            </div>
            <h3>Technologies:</h3>

            <div className="projectTechnos">
                {projectList[currentIndex].technologies.map((icon, index) => (
                    <Image
                        key={index}
                        src={icon}
                        alt={`Technologie ${index}`} />
                ))}
            </div>
        </div>
    )
}