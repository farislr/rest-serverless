'use strict';
module.exports = (sequelize, DataTypes) => {
  const article = sequelize.define('article', {
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    underscored: true,
  });
  article.associate = function(models) {
    // associations can be defined here
  };
  return article;
};