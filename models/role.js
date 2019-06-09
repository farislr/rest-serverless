'use strict'
module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define(
    'role',
    {
      name: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )
  role.associate = function(models) {
    // associations can be defined here
    role.hasMany(models.user, { foreignKey: 'role_id' })
    role.belongsToMany(models.permission, {through: 'role_permission', foreignKey: 'role_id'})
  }
  return role
}
