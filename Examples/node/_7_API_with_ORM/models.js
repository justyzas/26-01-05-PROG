import sequelize from "./db.js";
import { DataTypes } from "sequelize";

export const Cocktail = sequelize.define(
	"Cocktail",
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true, // Kiekvienas naujas įrašas turės viskitą id
			primaryKey: true, // Pirminio rakto apibrėžimas
		},
		recipe: {
			type: DataTypes.STRING,
			allowNull: false, // Stulpelis negali būti tuščias
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		glass: {
			type: DataTypes.ENUM(
				"Rocks",
				"Martini",
				"Bokalas",
				"Puodelis",
				"Highball glass",
			),
			allowNull: false,
		},
	},
	{
		tableName: "cocktails",
		createdAt: false,
		updatedAt: false,
	},
);
