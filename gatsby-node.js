const path = require("path")
const people = require("./src/data/people/data.json")
const IMAGE_PATH = "./src/data/people/images"

// Create the new nodeTypes
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  people.forEach(person => {
    /*
     * Image node
     */

    // Name, extension and absolute path are required to build a file node
    const imageFile = ({ name, ext } = path.parse(person.image))
    const absolutePath = path.resolve(__dirname, IMAGE_PATH, person.image)

    // Build a data shape that corresponds to a file node that Sharp can process
    const imageData = {
      name: imageFile.name,
      ext: imageFile.ext,
      absolutePath, // <-- required
      extension: imageFile.ext.substring(1), // <-- required, remove the dot in 'ext'
    }

    // Build the image node
    const imageNode = {
      ...imageData,
      id: createNodeId(`person-image-${imageFile.name}`),
      internal: {
        type: "PersonImage",
        contentDigest: createContentDigest(imageData),
      },
    }

    // Create the node. When imageNode is created,
    // Sharp adds childImageSharp to the node, yay! :)
    actions.createNode(imageNode)

    /*
     * Person node
     */

    // Extract the data
    const personData = ({
      name,
      email,
      phone,
      showContactInfo,
      location,
      workTitles,
    } = person)

    // Build the Person node
    const personNode = {
      ...personData,
      image: imageNode, // <-- Add the image node to our Person node. :)
      id: createNodeId(`person-${name}`),
      internal: {
        type: "Person",
        contentDigest: createContentDigest(person),
      },
    }

    // Create the node
    actions.createNode(personNode)
  })
}
