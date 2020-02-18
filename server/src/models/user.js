'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    uuid: {
      unique: true,
      type: DataTypes.UUID,
      field: 'uuid',
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'email',
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password',
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'salt',
    },
    lastLogin: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'last_login',
    },
    verificationCode: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'verification_code',
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'verified',
      defaultValue: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'active',
      defaultValue: true,
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'created_by',
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at',
      defaultValue: sequelize.fn('now'),
    },
    updatedBy: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'updated_by',
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at',
      defaultValue: sequelize.fn('now'),
    },
    deletedBy: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'deleted_by',
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at',
    },
  }, {
    tableName: 'users',
    indexes: [
      {
        unique: true,
        fields: ['username'],
        name: 'user_username_unique',
      }
    ]
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
