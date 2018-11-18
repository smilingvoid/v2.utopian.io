const Handlers = require('./handlers')

const routes = []

routes.push([
  {
    method: 'GET',
    path: '/v1/languages',
    handler: (req, h, next) => Handlers.getLanguages(req, h, next),
    options: {
      auth: false,
      tags: ['languages']
    }
  }
])

module.exports = routes
