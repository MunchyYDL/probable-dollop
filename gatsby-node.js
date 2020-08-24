const path = require('path');
const people = require('./src/data/people.json');

// relative path from `gatsby-node.js`
const IMAGE_PATH = './src/images/people';

// Create the new nodeTypes
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    people.forEach((person) => {

        /*
         * Image node
         */

        // 1. name, extension and absolute path are required to build a file node
        const imageFile = { name, ext } = path.parse(person.image);
        const absolutePath = path.resolve(__dirname, IMAGE_PATH, person.image);

        // 2. Build a data shape that corresponds to a file node that Sharp can process
        const imageData = {
            name: imageFile.name,
            ext: imageFile.ext,
            absolutePath,   // <-- required
            extension: imageFile.ext.substring(1), // <-- required, remove the dot in 'ext'
        };

        // 3. Build the image node
        const imageNode = {
            ...imageData,
            id: createNodeId(`person-image-${imageFile.name}`),
            internal: {
                type: 'PersonImage',
                contentDigest: createContentDigest(imageData),
            },
        };

        // 4. Create the node. When imageNode is created,
        //    Sharp adds childImageSharp to the node, yay! :)
        actions.createNode(imageNode);

        /*
         * Person node
         */

        // 1. Extract the data
        const personData = {
            name,
            email,
            phone,
            showContactInfo,
            location,
        } = person;

        // Just read the JSON and put it in?
        // const personData = {
        //     ...person
        // };
            
        // 2. Build the Person node
        const personNode = {
            ...personData,
            image: imageNode,  // 5. Add the image node to our Person node. :)
            id: createNodeId(`person-${name}`),
            internal: {
                type: 'Person',
                contentDigest: createContentDigest(person),
            },
        }

        // 3. Create the node
        actions.createNode(personNode);
    });
};
