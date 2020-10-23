import React, { FunctionComponent } from "react"
import Img from "gatsby-image"

import { Person, PersonWorkTitles } from "../data/people/Person"
import styles from "./personcard.module.css"

interface PersonCardProps {
  person: Person
  showContactInfo?: boolean
}

const WorkTitles: FunctionComponent<PersonWorkTitles> = ({ workTitles }) =>
  workTitles ? (
    <ul>
      {workTitles.map(title => (
        <li key={title}>{title}</li>
      ))}
    </ul>
  ) : null

const ContactDetails: FunctionComponent<PersonCardProps> = ({
  person,
  showContactInfo,
}) =>
  showContactInfo && person.showContactInfo ? (
    <p>
      <a href={`tel:${person.phone}`}>{person.phone}</a>
      <br />
      <a href={`mailto:${person.email}`}>{person.email}</a>
      <br />
    </p>
  ) : null

export const PersonCard: FunctionComponent<PersonCardProps> = ({
  person,
  showContactInfo = false,
}) => {
  // Handle faulty conversion in development sometimes
  const fixedImage = person?.image?.childImageSharp?.fixed

  return (
    <div className={styles.person}>
      <Img fixed={fixedImage} alt={person.name} />
      <h3>{person.name}</h3>
      {person.location}
      <br />
      <WorkTitles workTitles={person.workTitles} />
      <ContactDetails person={person} showContactInfo={showContactInfo} />
    </div>
  )
}
