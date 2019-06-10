const paginate = require('express-paginate')

module.exports = {
  getAll(model, options = {}) {
    return (req, res, next) => {
      options = Object.assign(options, {
        limit: req.query.limit,
        offset: req.skip,
      })
      model.findAndCountAll(options).then(val => {
        const { query } = req
        const pageCount = Math.ceil(val.count / query.limit)
        res.locals.val = {
          data: val.rows,
          count: val.count,
          pageCount,
          pages: paginate.getArrayPages(req)(3, pageCount, query.page),
        }
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
