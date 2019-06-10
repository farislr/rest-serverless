'use strict'
module.exports = (sequelize, DataTypes) => {
  const permission = sequelize.define(
    'permission',
    {
      name: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )
  permission.associate = function(models) {
    // associations can be defined here
    permission.belongsToMany(models.role, {
      through: 'role_permission',
      timestamps: false,
      foreignKey: 'permission_id',
    })
  }
  return permission
}
