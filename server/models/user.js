const DataTypes = require('sequelize');
const { Model } = DataTypes;
module.exports = class User extends Model {
  static init(sequelize) {
    return super.init({
      email: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      introduce: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      profileImagePath: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
    }, {
      modelName: 'User',
      tableName: 'users',
      charset: 'utf8',
      collate: 'utf8_general_ci',
      sequelize,
    });
  }

  static associate(db) {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked', foreignKey: 'Likers' });
  };
};