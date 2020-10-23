import React from "react"
import Img from "gatsby-image"

import { Person, PersonWorkTitles } from "../data/people/Person"
import styles from "./personcard.module.css"

interface PersonCardProps {
  person: Person
  showContactInfo?: boolean
}

const WorkTitles = ({ workTitles }: PersonWorkTitles) =>
  workTitles ? (
    <ul>
      {workTitles.map(title => (
        <li key={title}>{title}</li>
      ))}
    </ul>
  ) : null

const ContactDetails = ({ person, showContactInfo }: PersonCardProps) =>
  showContactInfo && person.showContactInfo ? (
    <p>
      <a href={`tel:${person.phone}`}>{person.phone}</a>
      <br />
      <a href={`mailto:${person.email}`}>{person.email}</a>
      <br />
    </p>
  ) : null

export const PersonCard = ({
  person,
  showContactInfo = false,
}: PersonCardProps) => {
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
