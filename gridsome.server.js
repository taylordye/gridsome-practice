// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// This is where we pull in external data, such as from an API (Headless CMS)

const axios = require('axios');

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/')

    // Add the data to the store for querying in GraphQL
    const collection = actions.addCollection('Users')

    for (const item of data) {
      collection.addNode({
        id: item.id,
        name: item.name,
        email: item.email,
        phone: item.phone,
        company: item.company['name'],
        companyWebsite: item.website
      })
    }

  })
}
