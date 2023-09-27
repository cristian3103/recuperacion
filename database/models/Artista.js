module.exports = function (sequelize, dataTypes) {
    let alias = "artista";

    let cols = {
        id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataType.STRING
        },
        last_name: {
            type: dataType.STRING
        }
    }

    let config = {
        tableName: "cantantes",
        timestamps: false,
    }

    let artista = sequelize.define(alias, cols, config);
    
    Artista.associate = function (models) {
        Artista.hasMany(models.pista, {
            as: "pistas",
            through: "artista_pista",
            foreignKey: "artista_id",
            timestamps: false,
            
        });
    }
        return artista;
    }