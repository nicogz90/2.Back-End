const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Job extends Model {}

  Job.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUppercase: true,
        },
      },
      applyEmail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      featured: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "job",
    }
  );
  return Job;
};
