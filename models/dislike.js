'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dislike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Dislike.init({
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // publish_date: DataTypes.DATE,
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
  }, {
    sequelize,
    modelName: 'Dislike',
  });
  return Dislike;
};