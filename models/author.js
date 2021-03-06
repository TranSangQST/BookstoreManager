const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('author', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'author',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "author_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
