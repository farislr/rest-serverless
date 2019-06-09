const { env } = process

module.exports = {
  [env.NODE_ENV]: {
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    host: env.DB_HOST,
    dialect: 'mysql',
  },
}
