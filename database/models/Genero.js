module.exports = function (sequelize, dataTypes) {
    let alias = "genero";

    let cols = { 
        id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataType.STRING
        }
    }

    let config = {
        tableName: "genres",
        timestamps: false,
    }
        
    let genero = sequelize.define(alias, cols, config);

    genero.associate = function(models) {
        genero.hasMany(models.pista, {
            as: "pistas",
            foreignKey: "genre_id",
        });
    }

    return genero;
}