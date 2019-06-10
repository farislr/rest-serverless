module.exports = {
  getAll(model, options = {}) {
    return (req, res, next) => {
      model.findAll(options).then(val => {
        res.locals.val = val
        return next()
      })
    }
  },
  getOne(model, options = {}) {
    return (req, res, next) => {
      model.findOne(options).then(val => {
        if (!val) return res.sendStatus(404)
        res.locals.val = val
        return next()
      })
    }
  },
}
