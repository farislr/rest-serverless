const db = require('../../models')
const passport = require('passport')

const privilege = (req, res, next) => {
  if (!req.user) {
    return req.method === 'GET' ? next() : res.sendStatus(401)
  }
  db.role
    .findOne({
      where: {
        id: req.user.role_id,
      },
      include: [
        {
          model: db.permission,
          attributes: ['name'],
          through: {
            attributes: [],
          },
        },
      ],
    })
    .then(roles => {
      if (!roles) return req.method === 'GET' ? next() : res.sendStatus(401)

      const { method } = req
      const { permissions } = roles
      let allowed = false

      permissions.map(permission => {
        const { name } = permission
        if (method === 'GET' && name === 'read') return (allowed = true)
        if (method === 'POST' && name === 'create') return (allowed = true)
        if (method === 'PATCH' && name === 'write') return (allowed = true)
        if (method === 'DELETE' && name === 'delete') return (allowed = true)
      })

      if (allowed) return next()
      return res.sendStatus(403)
    })
}

const auth = passport.authenticate('jwt', { session: false })

module.exports = { privilege, auth }
