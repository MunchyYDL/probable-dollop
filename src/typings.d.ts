declare module "*.css" {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames
}

declare module "gatsby-plugin-transition-link/AniLink" // As there are no types published for this package

declare module "*.svg" {
  import React = require("react")
  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  >>
  const src: string
  export default src
}
