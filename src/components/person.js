import React from "react"
import Img from "gatsby-image"

export function Person({person}) {

    const contactDetails = person.showContactInfo
        ? (
            <p>
                {person.phone}<br/>
                {person.email}<br/>
            </p>
        )
        : null;

    return (
        <div>
            <Img fixed={person.image.childImageSharp.fixed} alt={person.name} />
            <h3>{person.name}</h3>
            {contactDetails}
        </div>
    )
}