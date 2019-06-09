const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const JwtExtract = require('passport-jwt').ExtractJwt
const jwtSecret = process.env.JWT_SECRET || 'jwt secret'

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: JwtExtract.fromAuthHeaderAsBearerToken,
      secretOrKey: jwtSecret,
    },
    (req, payload, done) => {
      console.log('jwt strategy')
    }
  )
)
