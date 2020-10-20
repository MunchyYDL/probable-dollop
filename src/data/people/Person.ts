import { GatsbyImageFixedProps } from "gatsby-image"

export interface Person extends PersonContactDetails, PersonWorkTitles {
  name: string
  image: {
    childImageSharp: GatsbyImageFixedProps
  }
  location: string
}

export interface PersonContactDetails {
  showContactInfo: boolean
  email: string
  phone: boolean
}

export interface PersonWorkTitles {
  workTitles: string[]
}
