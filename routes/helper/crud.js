module.exports = {
  getOne(req, model, options) {
    return model.findOne(options)
  },
}
