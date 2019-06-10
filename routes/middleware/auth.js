const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const JwtExtract = require('passport-jwt').ExtractJwt
const jwtSecret = process.env.JWT_SECRET
const db = require('../../models')

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: JwtExtract.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret,
    },
    (payload, done) => {
      const { user } = payload
      db.user
        .findOne({
          where: {
            id: user.id,
          },
        })
        .then(user => {
          if (!user) return done(null, false)
          return done(null, user)
        })
    }
  )
)
