'use strict'
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'user',
    {
      role_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )
  user.associate = function(models) {
    // associations can be defined here
    user.belongsTo(models.role, { foreignKey: 'role_id' })
  }
  return user
}
