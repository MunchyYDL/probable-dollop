import React from "react"
import Img from "gatsby-image"

import styles from "./person.module.css"

export function Person({person, showContactInfo = false}) {

        const contactDetails = showContactInfo && person.showContactInfo
        ? (
            <p>
                <a href={`tel:${person.phone}`}>{person.phone}</a><br/>
                <a href={`mailto:${person.email}`}>{person.email}</a><br/>
            </p>
        )
        : null;

        // Handle faulty conversion in development sometimes
        const image = person.image.childImageSharp && person.image.childImageSharp.fixed;

    return (
        <div className={styles.person}>
            <Img fixed={image} alt={person.name} />
            <h3>{person.name}</h3>
            <p>
                {person.workTitle}<br/>
                {person.location}<br/>
            </p>
            {contactDetails}
        </div>
    )
}