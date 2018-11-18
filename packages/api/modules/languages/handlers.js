const Language = require('./language.model')

const getLanguages = async (req, h) => {
  return h.response(await Language.find({}).sort({ text: 1 }))
}

module.exports = {
  getLanguages
}
